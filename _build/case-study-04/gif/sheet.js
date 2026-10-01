// Decodes a GIF with Chrome's own ImageDecoder and lays sampled frames out on a sheet.
// node sheet.js <in.gif> <out.png> [samples] [cols]
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
const [gifPath, out, samplesArg = '12', colsArg = '6'] = process.argv.slice(2);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9960 + Math.floor(Math.random() * 30);
const prof = path.join(__dirname, 'cdp-' + port);
const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--remote-debugging-port=' + port, '--user-data-dir=' + prof, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  let list;
  for (let i = 0; i < 50 && !list; i++) { try { list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(200); } }
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const wait = {};
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && wait[m.id]) { wait[m.id](m); delete wait[m.id]; } };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; wait[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:4321/' });
  await sleep(1500);
  const b64 = fs.readFileSync(gifPath).toString('base64');
  const expr = `(async()=>{
    const bytes=Uint8Array.from(atob('${b64}'),c=>c.charCodeAt(0));
    const dec=new ImageDecoder({data:bytes,type:'image/gif'}); await dec.tracks.ready; await dec.completed;
    const N=dec.tracks.selectedTrack.frameCount; const starts=[]; let t=0, W, H;
    for(let i=0;i<N;i++){ const f=(await dec.decode({frameIndex:i})).image; starts.push(t); t+=f.duration||0; W=f.displayWidth; H=f.displayHeight; f.close(); }
    const S=${+samplesArg}, C=${+colsArg}, sc=${+(process.env.SC||0.5)}, w=Math.round(W*sc), h=Math.round(H*sc);
    document.body.innerHTML=''; document.body.style.cssText='margin:0;background:#888';
    const cv=document.createElement('canvas'); cv.width=C*(w+8)+8; cv.height=Math.ceil(S/C)*(h+26)+8; document.body.appendChild(cv);
    const g=cv.getContext('2d'); g.fillStyle='#888'; g.fillRect(0,0,cv.width,cv.height); g.font='13px sans-serif';
    for(let s=0;s<S;s++){ const at=t*s/(S-1)*0.9999; let i=0; while(i+1<N && starts[i+1]<=at) i++;
      const f=(await dec.decode({frameIndex:i})).image; const x=8+(s%C)*(w+8), y=8+Math.floor(s/C)*(h+26);
      g.drawImage(f,x,y,w,h); f.close(); g.fillStyle='#fff'; g.fillText((at/1e6).toFixed(1)+'s · #'+i,x,y+h+16); }
    return {frames:N, seconds:t/1e6, W, H, cw:cv.width, chh:cv.height};})()`;
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  const v = r.result.result.value; console.log(JSON.stringify(v || r.result));
  const s = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: v.cw, height: v.chh, scale: 1 }, captureBeyondViewport: true });
  fs.writeFileSync(out, Buffer.from(s.result.data, 'base64'));
  ws.close(); ch.kill(); process.exit(0);
})().catch(e => { console.error(e); ch.kill(); process.exit(1); });
