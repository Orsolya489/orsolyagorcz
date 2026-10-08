// Renders the three v11-*.html concept screens (from v11-gen.js) to PNG at 2x,
// with a transparent background so the phone's rounded corners stay clean.
//   node v11-render.js [outDir]     default outDir: public/signal
// Needs Chrome at the usual Windows path.
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const HERE = __dirname;
const OUT = process.argv[2] || path.join(HERE, '..', '..', 'public', 'signal');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const port = 9700 + Math.floor(Math.random() * 200);
const prof = path.join(require('os').tmpdir(), 'v11-render-' + port);
const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--remote-debugging-port=' + port, '--user-data-dir=' + prof, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  let list; for (let i = 0; i < 50 && !list; i++) { try { list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(200); } }
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const wait = {}; ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && wait[m.id]) { wait[m.id](m); delete wait[m.id]; } };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; wait[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: false });
  await send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
  await send('Page.enable');
  for (const k of ['chatgpt', 'claude', 'gemini']) {
    await send('Page.navigate', { url: 'file:///' + path.join(HERE, 'v11-' + k + '.html').replace(/\\/g, '/') });
    await sleep(900);
    const s = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 } });
    const f = path.join(OUT, 'concept-' + k + '.png');
    fs.writeFileSync(f, Buffer.from(s.result.data, 'base64')); console.log('wrote', f);
  }
  ws.close(); ch.kill(); process.exit(0);
})().catch(e => { console.error(e); ch.kill(); process.exit(1); });
