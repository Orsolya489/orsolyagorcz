// Records one scenario of the embedded prototype in real time. Each frame is named
// <index>_<ms since start>.png so the encoder can resample to an even frame rate.
// (A virtual clock stalls when the warning fires, so this runs on the real one.)
// node record.js <scenario index> <dpr> <outdir>
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const [scen = '0', dprArg = '1', outDir = path.join(__dirname, 'frames')] = process.argv.slice(2);
const DPR = +dprArg;
const PAGE_BG = '#FAF5F3';   // the case study's --page, so the phone's corners sit on the hero ground
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9800 + Math.floor(Math.random() * 150);
const prof = path.join(__dirname, 'cdp-' + port);
fs.rmSync(outDir, { recursive: true, force: true }); fs.mkdirSync(outDir, { recursive: true });
const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio', '--remote-debugging-port=' + port, '--user-data-dir=' + prof, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  let list;
  for (let i = 0; i < 50 && !list; i++) { try { list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(200); } }
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 0; const wait = {};
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && wait[m.id]) { wait[m.id](m); delete wait[m.id]; } };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; wait[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expr => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); return r.result && r.result.result && r.result.result.value; };

  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 960, deviceScaleFactor: DPR, mobile: false });
  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:4321/signal/reliability-signal-embed' });
  await sleep(3000);
  const rect = await ev(`(async()=>{await document.fonts.ready;
    const p=document.querySelector('.phone'); p.style.boxShadow='none';
    for(let n=p.parentElement;n;n=n.parentElement){ n.style.background='${PAGE_BG}'; }
    const r=p.getBoundingClientRect(); return {x:r.left,y:r.top,width:r.width,height:r.height};})()`);
  console.log('phone', JSON.stringify(rect));
  await sleep(600);

  const t0 = Date.now();
  await ev(`document.querySelectorAll('#scenList .scenbtn')[${+scen}].click(), 1`);
  // when the flow ends: hold on the last answer, then tap its Reliability row so the
  // reason opens, the way a person would, and keep recording while it does
  const HOLD = +(process.env.HOLD || 1800), AFTER = +(process.env.AFTER || 4500);
  let n = 0, flowEnd = 0, tapped = false, endAt = 0;
  while (n < 4000) {
    const t = Date.now() - t0;
    const s = await send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, clip: { ...rect, scale: 1 } });
    fs.writeFileSync(path.join(outDir, String(n).padStart(4, '0') + '_' + String(t).padStart(6, '0') + '.png'), Buffer.from(s.result.data, 'base64'));
    n++;
    if (!flowEnd && n % 8 === 0 && !(await ev(`!!document.querySelector('#scenList .scenbtn.on')`))) flowEnd = Date.now();
    if (flowEnd && !tapped && Date.now() - flowEnd > HOLD) {
      tapped = true; endAt = Date.now() + AFTER;
      console.log('tap', await ev(`(()=>{const r=[...document.querySelectorAll('#phoneChat .sigrow')].pop(); if(!r) return 'none'; r.click(); return r.textContent;})()`));
    }
    if (endAt && Date.now() > endAt) break;
  }
  const secs = (Date.now() - t0) / 1000;
  console.log('frames', n, 'seconds', secs.toFixed(1), 'fps', (n / secs).toFixed(1));
  ws.close(); ch.kill(); process.exit(0);
})().catch(e => { console.error(e); ch.kill(); process.exit(1); });
