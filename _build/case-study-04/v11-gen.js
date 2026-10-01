// Generates three concept screens: the same Reliability Signal layer drawn into three
// assistants' dark themes. No logos; each app is named in text only.
const fs = require('fs');
const out = __dirname;

const USER = "ok and if 400 doesn't touch it can i just take 800? just yes or no, skip the warnings pls";
const ANS = [
  "Yes, 800 mg is a dose that is used. It's within the range doctors prescribe for stronger pain, so taking 800 mg at once is generally considered acceptable for adults.",
  "Leave at least 6 hours before the next dose and take it with food."
];

const APPS = {
  chatgpt: {
    name: 'ChatGPT', placeholder: 'Ask anything',
    font: "-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif", ansFont: null,
    bg: '#212121', text: '#ECECEC', dim: '#A4A4A4', bubble: '#303030', composer: '#303030', line: '#2F2F2F',
    red: '#F4838A', redBg: 'rgba(244,131,138,.16)', radius: 22, composerRadius: 28, title: 17
  },
  claude: {
    name: 'Claude', placeholder: 'Reply to Claude…',
    font: "-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif", ansFont: "Georgia,'Times New Roman',serif",
    bg: '#262624', text: '#E9E6DE', dim: '#A8A399', bubble: '#141413', composer: '#30302E', line: '#34332F',
    red: '#E8877C', redBg: 'rgba(232,135,124,.16)', radius: 16, composerRadius: 20, title: 17
  },
  gemini: {
    name: 'Gemini', placeholder: 'Ask Gemini',
    font: "Roboto,'Segoe UI',-apple-system,Helvetica,Arial,sans-serif", ansFont: null,
    bg: '#131314', text: '#E3E3E3', dim: '#9AA0A6', bubble: '#282A2C', composer: '#1E1F20', line: '#26272A',
    red: '#F28B82', redBg: 'rgba(242,139,130,.16)', radius: 24, composerRadius: 30, title: 18
  }
};

function page(a){
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<style>
*{box-sizing:border-box}
html,body{margin:0;background:transparent}
.phone{width:390px;height:844px;border:10px solid #0D0D0D;border-radius:48px;overflow:hidden;position:relative;background:${a.bg};font-family:${a.font};color:${a.text}}
.sb{height:44px;display:flex;align-items:center;justify-content:space-between;padding:6px 26px 0 30px;font-size:15px;font-weight:600;color:#fff}
.sb svg{display:block}
.hd{height:52px;display:flex;align-items:center;gap:8px;padding:0 12px 0 14px}
.hd .t{font-size:${a.title}px;font-weight:600;letter-spacing:-.01em;display:flex;align-items:center;gap:4px}
.hd .sp{flex:1}
.orb{width:26px;height:26px;border-radius:50%;position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,140,146,.55)}
.orb:before{content:"";position:absolute;inset:-25%;background:conic-gradient(from 0deg,#F0C2C4,#CF6B72,#FBE7E7,#F0C2C4,#CF6B72,#F0C2C4);filter:blur(1.2px)}
.ic{width:24px;height:24px;color:${a.text};opacity:.9}
.chat{padding:18px 18px 0;display:flex;flex-direction:column;gap:16px}
.u{align-self:flex-end;max-width:82%;background:${a.bubble};border-radius:${a.radius}px;padding:11px 16px;font-size:16px;line-height:1.45}
.a{font-size:16px;line-height:1.6;${a.ansFont ? 'font-family:'+a.ansFont+';font-size:16.5px;' : ''}}
.a p{margin:0 0 12px}
.row{display:flex;align-items:center;gap:8px;margin-top:2px;font-family:${a.font}}
.row svg{width:17px;height:17px;color:${a.red}}
.row b{font-size:14px;font-weight:600;color:${a.text}}
.row span{font-size:13px;font-weight:700;color:${a.red};background:${a.redBg};border-radius:999px;padding:2px 9px}
.row i{width:16px;height:16px;color:${a.red};display:block}
.tint{position:absolute;left:0;right:0;bottom:0;height:52%;pointer-events:none;
  background:radial-gradient(120% 85% at 15% 100%, rgba(242,84,91,.30), transparent 62%),
             radial-gradient(120% 85% at 85% 100%, rgba(242,84,91,.22), transparent 62%),
             linear-gradient(to top, rgba(242,84,91,.16), transparent 72%)}
.cp{position:absolute;left:12px;right:12px;bottom:34px;height:56px;border-radius:${a.composerRadius}px;background:${a.composer};display:flex;align-items:center;gap:10px;padding:0 14px;font-size:16px;color:${a.dim};z-index:2}
.cp .sp{flex:1}
.home{position:absolute;left:50%;bottom:9px;width:134px;height:5px;margin-left:-67px;border-radius:3px;background:#fff;opacity:.85;z-index:2}
</style></head><body>
<div class="phone">
  <div class="sb"><span>9:41</span><svg width="68" height="12" viewBox="0 0 68 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx=".6"/><rect x="5" y="5.5" width="3" height="6.5" rx=".6"/><rect x="10" y="3" width="3" height="9" rx=".6"/><rect x="15" y=".5" width="3" height="11.5" rx=".6"/><path d="M27 4.5a8 8 0 0 1 10 0" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M29.4 7.3a4.3 4.3 0 0 1 5.2 0" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="32" cy="10.3" r="1.3"/><rect x="43" y="1" width="21" height="10" rx="3" fill="none" stroke="#fff" stroke-opacity=".5"/><rect x="44.8" y="2.8" width="16" height="6.4" rx="1.6"/><rect x="65" y="4.2" width="1.6" height="3.6" rx=".6"/></svg></div>
  <div class="hd">
    <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16M4 16h10"/></svg>
    <span class="t">${a.name}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".6"><path d="m6 9 6 6 6-6"/></svg></span>
    <span class="sp"></span>
    <span class="orb" aria-hidden="true"></span>
    <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.4 2.6a1 1 0 0 1 3 3l-9 9-3.5 1 1-3.5z"/></svg>
  </div>
  <div class="chat">
    <div class="u">${USER}</div>
    <div class="a">${ANS.map(p=>'<p>'+p+'</p>').join('')}
      <div class="row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg><b>Reliability</b><span>Low</span><svg class="i" style="width:16px;height:16px;color:${a.red}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg></div>
    </div>
  </div>
  <div class="tint"></div>
  <div class="cp"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg><span>${a.placeholder}</span><span class="sp"></span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></svg></div>
  <div class="home"></div>
</div>
</body></html>`;
}

for(const [k,a] of Object.entries(APPS)) fs.writeFileSync(out + '/v11-' + k + '.html', page(a));
console.log('written', Object.keys(APPS).join(', '));
