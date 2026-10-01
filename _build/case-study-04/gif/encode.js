// PNG frames -> one looping GIF. No dependencies: PNG decode, median-cut palette,
// changed-rectangle frames with a transparent index for unchanged pixels, LZW.
// node encode.js <framedir> <out.gif> <frame ms> [maxHoldMs] [finalHoldMs] [scale]
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const [dir, out, frameMsArg = '80', maxHoldArg = '4000', finalHoldArg = '4000', scaleArg = '1'] = process.argv.slice(2);
const FRAME_MS = +frameMsArg, MAX_HOLD = +maxHoldArg, FINAL_HOLD = +finalHoldArg, SCALE = +scaleArg;

function decodePNG(buf) {
  let p = 8, w, h, ct, idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), type = buf.toString('latin1', p + 4, p + 8), d = buf.subarray(p + 8, p + 8 + len);
    if (type === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); if (d[8] !== 8 || d[12] !== 0) throw new Error('unsupported png'); ct = d[9]; }
    else if (type === 'IDAT') idat.push(d);
    else if (type === 'IEND') break;
    p += 12 + len;
  }
  const bpp = ct === 6 ? 4 : ct === 2 ? 3 : (() => { throw new Error('colour type ' + ct); })();
  const raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * bpp, px = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = y * (stride + 1) + 1, o = y * stride;
    for (let x = 0; x < stride; x++) {
      const a = x >= bpp ? px[o + x - bpp] : 0, b = y ? px[o - stride + x] : 0, c = x >= bpp && y ? px[o - stride + x - bpp] : 0;
      let v = raw[src + x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      px[o + x] = v & 255;
    }
  }
  const rgb = Buffer.alloc(w * h * 3);
  for (let i = 0, j = 0; i < w * h; i++, j += bpp) { rgb[i * 3] = px[j]; rgb[i * 3 + 1] = px[j + 1]; rgb[i * 3 + 2] = px[j + 2]; }
  return { w, h, rgb };
}

// box-filter downscale, for a smaller file when asked
function shrink(f, s) {
  if (s === 1) return f;
  const W = Math.round(f.w * s), H = Math.round(f.h * s), o = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const x0 = Math.floor(x / s), x1 = Math.max(x0 + 1, Math.floor((x + 1) / s)), y0 = Math.floor(y / s), y1 = Math.max(y0 + 1, Math.floor((y + 1) / s));
    let r = 0, g = 0, b = 0, n = 0;
    for (let yy = y0; yy < y1 && yy < f.h; yy++) for (let xx = x0; xx < x1 && xx < f.w; xx++) { const i = (yy * f.w + xx) * 3; r += f.rgb[i]; g += f.rgb[i + 1]; b += f.rgb[i + 2]; n++; }
    const k = (y * W + x) * 3; o[k] = Math.round(r / n); o[k + 1] = Math.round(g / n); o[k + 2] = Math.round(b / n);
  }
  return { w: W, h: H, rgb: o };
}

let files = fs.readdirSync(dir).filter(f => f.endsWith('.png')).sort();
// frames named <n>_<ms>.png were taken in real time: resample to an even rate by
// showing, at each tick, the latest frame taken at or before it
if (/_\d+\.png$/.test(files[0])) {
  const ts = files.map(f => +f.match(/_(\d+)\.png$/)[1]), end = ts[ts.length - 1], picked = [];
  for (let t = 0, j = 0; t <= end; t += FRAME_MS) { while (j + 1 < ts.length && ts[j + 1] <= t) j++; picked.push(files[j]); }
  files = picked;
}
const memo = new Map();
const frames = files.map(f => { if (!memo.has(f)) memo.set(f, shrink(decodePNG(fs.readFileSync(path.join(dir, f))), SCALE)); return memo.get(f); });
const W = frames[0].w, H = frames[0].h;

// palette: 6-bit histogram, median cut to 255 colours (index 255 is transparent)
const BINS = 1 << 18, cnt = new Float64Array(BINS), sr = new Float64Array(BINS), sg = new Float64Array(BINS), sb = new Float64Array(BINS);
for (const f of frames) for (let i = 0; i < W * H; i++) {
  const r = f.rgb[i * 3], g = f.rgb[i * 3 + 1], b = f.rgb[i * 3 + 2], k = (r >> 2) << 12 | (g >> 2) << 6 | (b >> 2);
  cnt[k]++; sr[k] += r; sg[k] += g; sb[k] += b;
}
let bins = []; for (let k = 0; k < BINS; k++) if (cnt[k]) bins.push(k);
const ch = (k, c) => c === 0 ? k >> 12 : c === 1 ? (k >> 6) & 63 : k & 63;
function box(list) {
  let n = 0, lo = [63, 63, 63], hi = [0, 0, 0];
  for (const k of list) { n += cnt[k]; for (let c = 0; c < 3; c++) { const v = ch(k, c); if (v < lo[c]) lo[c] = v; if (v > hi[c]) hi[c] = v; } }
  const rng = [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]], axis = rng.indexOf(Math.max(...rng));
  return { list, n, axis, range: rng[axis], pri: Math.sqrt(n) * rng[axis] };
}
let boxes = [box(bins)];
while (boxes.length < 255) {
  boxes.sort((a, b) => b.pri - a.pri);
  if (process.env.DBG && (boxes.length < 6 || boxes.length % 50 === 0)) console.log(boxes.length, JSON.stringify(boxes.slice(0, 4).map(b => [b.n, b.range, b.axis, Math.round(b.pri), b.list.length])));
  const bx = boxes[0]; if (bx.range === 0 || bx.list.length < 2) break;
  const sorted = bx.list.slice().sort((a, b) => ch(a, bx.axis) - ch(b, bx.axis));
  // if the median falls in the last bin, that bin splits off on its own
  let acc = 0, cut = sorted.length - 1; for (let i = 0; i < sorted.length - 1; i++) { acc += cnt[sorted[i]]; if (acc >= bx.n / 2) { cut = i + 1; break; } }
  boxes.splice(0, 1, box(sorted.slice(0, cut)), box(sorted.slice(cut)));
}
const pal = boxes.map(b => { let n = 0, r = 0, g = 0, bl = 0; for (const k of b.list) { n += cnt[k]; r += sr[k]; g += sg[k]; bl += sb[k]; } return [Math.round(r / n), Math.round(g / n), Math.round(bl / n)]; });
while (pal.length < 256) pal.push([0, 0, 0]);
const TRANSP = 255, cache = new Int16Array(BINS).fill(-1);
function idx(r, g, b) {
  const k = (r >> 2) << 12 | (g >> 2) << 6 | (b >> 2); if (cache[k] >= 0) return cache[k];
  const R = sr[k] / cnt[k] || r, G = sg[k] / cnt[k] || g, B = sb[k] / cnt[k] || b;
  let best = 0, bd = 1e9; for (let i = 0; i < 255; i++) { const d = (pal[i][0] - R) ** 2 * 3 + (pal[i][1] - G) ** 2 * 4 + (pal[i][2] - B) ** 2 * 2; if (d < bd) { bd = d; best = i; } }
  return cache[k] = best;
}
if (process.env.PAL) { const f = frames[frames.length - 1]; const probe = JSON.parse(process.env.PAL).map(([x, y]) => { const i = (y * W + x) * 3, r = f.rgb[i], g = f.rgb[i + 1], b = f.rgb[i + 2], j = idx(r, g, b); return [x, y, [r, g, b], j, pal[j]]; }); console.log(JSON.stringify(probe)); console.log("pal", JSON.stringify(pal.slice(0, 255).map(c => c.map(v => v.toString(16).padStart(2, "0")).join("")))); }
const ix = frames.map(f => { const a = new Uint8Array(W * H); for (let i = 0; i < W * H; i++) a[i] = idx(f.rgb[i * 3], f.rgb[i * 3 + 1], f.rgb[i * 3 + 2]); return a; });

// timeline: identical frames merge; long holds are capped
const tl = [];
for (let i = 0; i < ix.length; i++) {
  const last = tl[tl.length - 1];
  if (last && Buffer.compare(Buffer.from(last.a.buffer), Buffer.from(ix[i].buffer)) === 0) last.ms += FRAME_MS;
  else tl.push({ a: ix[i], ms: FRAME_MS });
}
tl.forEach(t => { t.ms = Math.min(t.ms, MAX_HOLD); });
tl[tl.length - 1].ms = FINAL_HOLD;

function lzw(data, minCode) {
  const clear = 1 << minCode, eoi = clear + 1, outB = []; let size = minCode + 1, next = eoi + 1, dict = new Map(), cur = 0, bits = 0;
  const emit = c => { cur |= c << bits; bits += size; while (bits >= 8) { outB.push(cur & 255); cur >>>= 8; bits -= 8; } };
  emit(clear); let prefix = data[0];
  for (let i = 1; i < data.length; i++) {
    const k = data[i], key = prefix << 8 | k, hit = dict.get(key);
    if (hit !== undefined) { prefix = hit; continue; }
    emit(prefix);
    if (next < 4096) { dict.set(key, next++); if (next > (1 << size) && size < 12) size++; }
    else { emit(clear); dict = new Map(); next = eoi + 1; size = minCode + 1; }
    prefix = k;
  }
  emit(prefix); emit(eoi); if (bits > 0) outB.push(cur & 255);
  const blocks = []; for (let i = 0; i < outB.length; i += 255) { const s = outB.slice(i, i + 255); blocks.push(s.length, ...s); }
  blocks.push(0); return Buffer.from(blocks);
}
const u16 = v => [v & 255, v >> 8];
const parts = [Buffer.from('GIF89a', 'latin1'), Buffer.from([...u16(W), ...u16(H), 0xF7, 0, 0]), Buffer.from(pal.flat()),
  Buffer.from([0x21, 0xFF, 0x0B, ...Buffer.from('NETSCAPE2.0', 'latin1'), 0x03, 0x01, 0, 0, 0])];
let prev = null;
for (const t of tl) {
  let x0 = 0, y0 = 0, x1 = W - 1, y1 = H - 1;
  if (prev) {
    x0 = W; y0 = H; x1 = -1; y1 = -1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (t.a[y * W + x] !== prev[y * W + x]) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 < 0) { x0 = y0 = x1 = y1 = 0; }
  }
  const w = x1 - x0 + 1, h = y1 - y0 + 1, sub = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const v = t.a[(y + y0) * W + x + x0]; sub[y * w + x] = prev && prev[(y + y0) * W + x + x0] === v ? TRANSP : v; }
  const cs = Math.max(2, Math.round(t.ms / 10));
  parts.push(Buffer.from([0x21, 0xF9, 0x04, (1 << 2) | (prev ? 1 : 0), ...u16(cs), TRANSP, 0]));
  parts.push(Buffer.from([0x2C, ...u16(x0), ...u16(y0), ...u16(w), ...u16(h), 0]));
  parts.push(Buffer.from([8])); parts.push(lzw(sub, 8));
  prev = t.a;
}
parts.push(Buffer.from([0x3B]));
const gif = Buffer.concat(parts); fs.writeFileSync(out, gif);
const total = tl.reduce((s, t) => s + t.ms, 0);
console.log(`${W}x${H}, ${frames.length} frames -> ${tl.length} gif frames, ${(total / 1000).toFixed(1)}s, ${(gif.length / 1024).toFixed(0)} KB, palette ${boxes.length}`);

// last frame as a still, for reduced motion
if (process.env.STILL) {
  const f = frames[frames.length - 1];
  const rows = []; for (let y = 0; y < H; y++) { rows.push(Buffer.from([0])); rows.push(f.rgb.subarray(y * W * 3, (y + 1) * W * 3)); }
  const crcT = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc = b => { let c = 0xFFFFFFFF; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  const chunk = (type, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(type, 'latin1'), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4); ihdr[8] = 8; ihdr[9] = 2;
  fs.writeFileSync(process.env.STILL, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(Buffer.concat(rows), { level: 9 })), chunk('IEND', Buffer.alloc(0))]));
  console.log('still', process.env.STILL);
}
