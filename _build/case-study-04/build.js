const fs = require('fs');
const path = require('path');
const REPO = 'C:/Users/orsig/portfolio-2026';
const HERE = __dirname;
const srcPath = REPO + '/_archive/case-study-04-signal.pre-rewrite.html';
const src = fs.readFileSync(srcPath, 'utf8');

function must(cond, msg){ if(!cond){ console.error('FAIL: ' + msg); process.exit(1); } }
function between(s, a, b, from){ const i = s.indexOf(a, from||0); must(i >= 0, 'missing ' + a.slice(0,40)); const j = s.indexOf(b, i); must(j >= 0, 'missing end ' + b.slice(0,40)); return [i, j]; }
function once(s, find, repl, label){ const n = s.split(find).length - 1; must(n === 1, label + ' matched ' + n + ' times'); return s.replace(find, repl); }

/* ── V5, rebuilt from sensory-calibration3 in the site's own system ── */
function v5svg(){
  const P = {
    eye:  ["M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"],
    ear:  ["M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"],
    hand: ["M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"],
    warn: ["m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", "M12 9v4", "M12 17h.01"],
    alert:["M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0", "M12 8v4", "M12 16h.01"]
  };
  const COLS = [
    { x:0, label:'Colour', icon:'eye', goal:'Warn without shocking', pos:.5,
      lo:['Tint shift alone'], hi:['Red flash, pop-up','covers the answer'],
      what:['A tint from the bottom edge,','with a shape and a word'],
      why:['A warning rises higher than','a caution, so height tells them','apart even without colour.'],
      vul:['Colour-blind users read the','shape and the word, not the hue.'] },
    { x:310, label:'Sound', icon:'ear', goal:'Heard, not jolted', pos:.45,
      lo:['No sound','easy to miss'], hi:['Shrill beep, instant','triggers a startle'],
      what:['Two soft tones,','fading in over 180 ms'],
      why:['Accuracy warnings only.','The slow onset stays below','the startle reflex.'],
      vul:['Mid pitch survives age-related','hearing loss. Off by default,','silent in a crisis.'] },
    { x:620, label:'Touch', icon:'hand', goal:'Felt, not buzzing', pos:.36,
      lo:['No vibration','easy to miss'], hi:['Long, repeated buzz','feels like a call'],
      what:['Warnings only:','two 22 ms taps'],
      why:['A call buzzes for seconds.','Two short taps read as a nudge,','once per new warning.'],
      vul:['Short and rare for people','sensitive to touch. Length is','the only dial a browser has.'] }
  ];
  const r = n => Math.round(n*100)/100;
  const glyph = (paths, cx, cy, size, cls) => {
    const k = size/24;
    return '<g transform="translate(' + r(cx-size/2) + ',' + r(cy-size/2) + ') scale(' + r(k) + ')">' +
      paths.map(d => '<path class="' + cls + '" d="' + d + '" vector-effect="non-scaling-stroke"/>').join('') + '</g>';
  };
  const t = (cls, x, y, s, anchor) => '<text class="' + cls + '" x="' + r(x) + '" y="' + r(y) + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + s + '</text>';
  let o = '';
  o += '<svg class="v-min" style="--v-min:720px" viewBox="0 0 900 670" role="img" aria-labelledby="v5t v5d">';
  o += '<title id="v5t">How much disruption is enough?</title>';
  o += '<desc id="v5d">Three senses, each placed on a scale from missed to startles with the shipped setting marked. Colour rises from the bottom edge as a tint, higher for a warning than for a caution, while sound plays two soft rising tones only for accuracy warnings. Touch gives two short taps for warnings, far shorter than the buzz of a call.</desc>';
  o += '<defs>' +
    '<linearGradient id="v5gc" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(--caution);stop-opacity:.34"/><stop offset="1" style="stop-color:var(--caution);stop-opacity:0"/></linearGradient>' +
    '<linearGradient id="v5ga" x1="0" y1="1" x2="0" y2="0"><stop offset="0" style="stop-color:var(--alert);stop-opacity:.34"/><stop offset="1" style="stop-color:var(--alert);stop-opacity:0"/></linearGradient>' +
    '</defs>';
  COLS.forEach(c => {
    const cx = c.x + 140, L = c.x + 8, R = c.x + 272, mx = L + (R - L) * c.pos;
    o += t('v5-ch', c.x, 18, c.label);
    [[52,14],[64,22]].forEach(([dx,h]) => {
      o += '<path class="v5-reach" d="M' + (cx-dx+6) + ' ' + (78-h) + ' Q ' + (cx-dx-4) + ' 78, ' + (cx-dx+6) + ' ' + (78+h) + '"/>';
      o += '<path class="v5-reach" d="M' + (cx+dx-6) + ' ' + (78-h) + ' Q ' + (cx+dx+4) + ' 78, ' + (cx+dx-6) + ' ' + (78+h) + '"/>';
    });
    o += glyph(P[c.icon], cx, 78, 56, 'v5-icon');
    o += t('v5-goal', cx, 150, c.goal, 'middle');
    o += '<rect class="v5-track" x="' + L + '" y="176" width="' + (R-L) + '" height="8" rx="4"/>';
    o += '<rect class="v5-mark" x="' + r(mx-28) + '" y="176" width="56" height="8" rx="4"/>';
    o += '<path class="v5-mark" d="M' + r(mx) + ' 171 l-6 -9 h12 z"/>';
    o += t('v5-end', L, 206, 'Missed');
    o += t('v5-end', R, 206, 'Startles', 'end');
    c.lo.forEach((s,i) => { o += t('v5-ex', L, 228 + i*19, s); });
    c.hi.forEach((s,i) => { o += t('v5-ex', R, 228 + i*19, s, 'end'); });
    o += '<path class="hair" d="M' + r(mx) + ' 186 V 270" stroke-dasharray="2 3"/>';
    o += '<rect class="v5-box" x="' + c.x + '" y="270" width="280" height="270" rx="10"/>';
    o += t('v5-what', cx, 420, c.what[0], 'middle');
    o += t('v5-what', cx, 441, c.what[1], 'middle');
    o += '<path class="hair" d="M' + (cx-26) + ' 458 H ' + (cx+26) + '"/>';
    c.why.forEach((s,i) => { o += t('v5-why', cx, 481 + i*19, s, 'middle'); });
    o += '<rect class="v5-vbox" x="' + c.x + '" y="556" width="280" height="108" rx="10"/>';
    o += t('v5-vh', c.x + 18, 582, 'For sensitive users');
    c.vul.forEach((s,i) => { o += t('v5-vt', c.x + 18, 606 + i*20, s); });
  });
  // colour: two screens, the tint rising from the bottom edge; a warning rises higher
  [[16,'Caution','caution','v5gc',.36,P.warn],[152,'Warning','alert','v5ga',.56,P.alert]].forEach(([x,word,tone,grad,frac,icon]) => {
    const y = 288, w = 112, h = 94, th = r(h*frac);
    o += '<rect class="v5-scr" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8"/>';
    [12,24,36].forEach((dy,i) => { o += '<rect class="v5-ln" x="' + (x+10) + '" y="' + (y+dy) + '" width="' + (i===2 ? 54 : 88) + '" height="5" rx="2.5"/>'; });
    o += '<rect x="' + (x+1) + '" y="' + r(y+h-th) + '" width="' + (w-2) + '" height="' + r(th-1) + '" rx="7" fill="url(#' + grad + ')"/>';
    o += '<rect x="' + (x+7) + '" y="' + (y+h-26) + '" width="' + (w-14) + '" height="19" rx="9.5" fill="var(--page)" class="k-' + tone + '" stroke-width="1.2"/>';
    o += glyph(icon, x+19, y+h-16.5, 12, 'v5-icon k-' + tone);
    o += t('v5-chip c-' + tone, x+30, y+h-12, word);
  });
  // sound: two soft tones, the second higher, each fading in
  o += '<path class="hair" d="M328 380 H 572"/>';
  o += '<path fill="none" class="k-alert" stroke-width="2.5" stroke-linejoin="round" d="M392 362 L416 338 L468 362"/>';
  o += '<path fill="none" class="k-alert" stroke-width="2.5" stroke-linejoin="round" d="M452 334 L478 306 L540 334"/>';
  // touch: two short taps against a call's long buzz
  const hx = 638, K = .152;
  o += t('v5-lab', hx, 334, 'Warning');
  o += '<rect class="c-alert" x="' + (hx+74) + '" y="322" width="' + r(Math.max(4,22*K)) + '" height="16" rx="1"/>';
  o += '<rect class="c-alert" x="' + r(hx+74+82*K) + '" y="322" width="' + r(Math.max(4,22*K)) + '" height="16" rx="1"/>';
  o += t('v5-lab', hx, 368, 'Call buzz');
  o += '<rect x="' + (hx+74) + '" y="356" width="152" height="16" rx="2" fill="none" stroke="var(--fig-soft)" stroke-width="1.4" stroke-dasharray="3 3"/>';
  o += '</svg>';
  return o;
}

/* ── pieces reused from the old page ── */
function dgmScroll(id){
  const [i] = between(src, '<div class="dgm-scroll" tabindex="0" role="group" aria-labelledby="' + id + '">', '</svg></div>');
  const j = src.indexOf('</svg></div>', i) + '</svg></div>'.length;
  let s = src.slice(i, j);
  s = once(s, '<svg viewBox="0 0 920 596"', '<svg class="v-min" style="--v-min:640px" viewBox="0 0 920 596"', 'v-min ' + id);
  return s;
}
const V10A = dgmScroll('fr1t');
const V10B = dgmScroll('fr2t');
const [si, sj] = between(src, '<ol class="slope-flow">', '</ol>');
const SLOPE = src.slice(si, sj + 5);

/* ── R1–R5, pre-rendered from research-figures.html so the page carries static SVG ── */
const rendered = fs.readFileSync(HERE + '/research-figures.rendered.html', 'utf8');
function rfig(id){
  const i = rendered.indexOf('<figure id="' + id + '"'); must(i >= 0, 'figure ' + id);
  let f = rendered.slice(i, rendered.indexOf('</figure>', i) + '</figure>'.length);
  f = once(f, '<figure id="' + id + '"', '<figure class="rfig" id="' + id + '"', 'rfig class ' + id);
  return f;
}
let R1 = rfig('R1'), R2 = rfig('R2'), R3 = rfig('R3'), R4 = rfig('R4'), R5 = rfig('R5');
const wrapScroll = (f, svgId) => {
  const a = f.indexOf('<svg id="' + svgId + '"'); must(a > 0, 'svg ' + svgId);
  const z = f.indexOf('</svg>', a) + '</svg>'.length;
  return f.slice(0, a) + '<div class="rfig-scroll">' + f.slice(a, z) + '</div>' + f.slice(z);
};
R1 = wrapScroll(R1, 'svgR1');
R4 = wrapScroll(R4, 'svgR4');
R3 = once(R3, '</figure>', ' <figcaption>Eight of 81 written answers; the Hungarian ones are my translations.</figcaption>\n</figure>', 'R3 caption');
{
  const RULES = ['Verdict stays with the person','Name the reason','Silent by default','More danger, more senses','Watch the whole conversation','Point, never block','No alarm in a crisis'];
  const L = ['Judgment to the person · 84%','Bias expected · 4.02','Signals: useful, for some topics','Drift, unannounced','Objection to protection'];
  const Rr = ['Cognitive psychology','Human factors','Psychophysics','AI systems','AI ethics &amp; policy'];
  const links = [[0,0,null],[0,null,0],[0,null,4],[1,1,null],[1,null,1],[2,2,null],[2,null,1],[3,null,2],[3,null,1],[4,3,null],[4,null,3],[5,4,null],[5,null,4],[6,null,4],[6,null,2]];
  const items = RULES.map((r, i) => {
    const chips = links.filter(k => k[0] === i).map(k => k[1] !== null
      ? '<span class="r5-chip r5-chip--s">' + L[k[1]] + '</span>'
      : '<span class="r5-chip r5-chip--l">' + Rr[k[2]] + '</span>').join('');
    return '<li><span class="r5-rule"><span class="r5-n" aria-hidden="true">' + (i+1) + '</span>' + r + '</span><span class="r5-chips">' + chips + '</span></li>';
  }).join('\n  ');
  const list = ' <p class="r5-key" aria-hidden="true"><span class="r5-chip r5-chip--s">Survey</span><span class="r5-chip r5-chip--l">Literature</span></p>\n <ol class="r5-list">\n  ' + items + '\n </ol>\n';
  R5 = once(R5, '</figure>', list + '</figure>', 'R5 list');
}

/* ── head ── */
const TITLE = 'Reliability Signal: lane departure warning, for AI answers';
const DESC = 'A sensory safety layer, designed to be built into AI apps, that marks when an answer deserves a second look and leaves the answer untouched.';
const HEAD_END = src.indexOf('</head>') + '</head>'.length;
const BODY_AT = src.indexOf('<body>', HEAD_END);
let head = src.slice(0, BODY_AT);
head = once(head, '<title>Feeling the Machine Hesitate — making AI uncertainty perceptible</title>', '<title>' + TITLE + '</title>', 'title');
head = once(head, '<meta name="description" content="A multimodal signalling system that makes AI uncertainty, ethical friction and bias perceptible in real time — before the user has already acted on the answer.">', '<meta name="description" content="' + DESC + '">', 'description');
head = once(head, '<meta property="og:title" content="Feeling the Machine Hesitate — making AI uncertainty perceptible">', '<meta property="og:title" content="' + TITLE + '">', 'og:title');
head = once(head, '<meta property="og:description" content="A multimodal signalling system that makes AI uncertainty, ethical friction and bias perceptible in real time — before the user has already acted on the answer.">', '<meta property="og:description" content="' + DESC + '">', 'og:description');
head = once(head, 'https://orsolyagorcz.com/signal/signal_mockup_warning_nobackground.png', 'https://orsolyagorcz.com/signal/reliability-signal-mockup.png', 'og:image');
head = once(head, '<meta property="og:image:width" content="680">', '<meta property="og:image:width" content="924">', 'og w');
head = once(head, '<meta property="og:image:height" content="1380">', '<meta property="og:image:height" content="2000">', 'og h');
head = head.replace(/<meta property="og:image:alt" content="[^"]*">/, '<meta property="og:image:alt" content="A phone chat in its warning state, with a Reliability, Low row under an answer about ibuprofen and the reason opened beneath it.">');
head = once(head, '</style>', fs.readFileSync(HERE + '/new.css', 'utf8') + fs.readFileSync(HERE + '/research.css', 'utf8') + '</style>', 'style end');
/* the phone layer every page shares: after the page's own styles, so it wins on a phone */
head = once(head, '</head>', '<link rel="stylesheet" href="/site-mobile.css">\n</head>', 'mobile css');

/* ── chrome ── */
let chrome = src.slice(BODY_AT, src.indexOf('<div class="wrap">', BODY_AT));
/* on a phone, Noise for focus is a row in the accessibility panel; the page's
   noise script already drives a #noiseBtnM when there is one */
chrome = once(chrome, '<p class="pnote">', '<div class="prow prow--m"><span>Noise for focus</span><button class="btn" id="noiseBtnM" aria-label="Play noise for focus" aria-pressed="false">Off</button></div>\n    <p class="pnote">', 'panel noise row');
const [oi, oj] = between(chrome, '<ol>', '</ol>');
chrome = chrome.slice(0, oi) + '<ol>\n        <li><a href="#s1">The problem</a></li>\n        <li><a href="#s2">The research</a></li>\n        <li><a href="#s3">The system</a></li>\n        <li><a href="#s4">The design</a></li>\n        <li><a href="#s5">The prototype</a></li>\n        <li><a href="#s6">What’s next</a></li>\n      </ol>' + chrome.slice(oj + 5);

/* ── body ── */
let body = fs.readFileSync(HERE + '/body.html', 'utf8');
body = once(body, '{{V10A}}', V10A, 'V10A');
body = once(body, '{{V10B}}', V10B, 'V10B');
/* the lane-departure drive, back below the system. Two standing rules apply to it:
   every visible word says Warning, and green means support, so its silent lane and
   silent car are drawn in the neutral (#road rebinds the green tokens in new.css) */
let ROAD = (() => { const [a] = between(src, '<section class="road" id="road"', '</section>'); return src.slice(a, src.indexOf('</section>', a) + '</section>'.length); })();
ROAD = once(ROAD, '<span class="rd-lab rd-lab--a">Alert</span>', '<span class="rd-lab rd-lab--a">Warning</span>', 'road lane label');
body = once(body, '{{ROAD}}', '    ' + ROAD, 'ROAD');
body = once(body, '{{V5}}', v5svg(), 'V5');
body = once(body, '{{R1}}', R1, 'R1');
body = once(body, '{{R2}}', R2, 'R2');
body = once(body, '{{R3}}', R3, 'R3');
body = once(body, '{{R4}}', R4, 'R4');
body = once(body, '{{R5}}', R5, 'R5');

/* ── script: the three-app carousel is gone with its section; the drive stays ── */
const S0 = src.indexOf('<script>', BODY_AT);
let script = src.slice(S0, src.indexOf('</script>', S0) + '</script>'.length);
script = once(script, "WORD={green:'Silent',yellow:'Caution',red:'Alert'}", "WORD={green:'Silent',yellow:'Caution',red:'Warning'}", 'drive word');
script = once(script, '<b>Alert — the one case that makes a sound.</b>', '<b>Warning — the one case that makes a sound.</b>', 'drive note 3');
script = once(script, '<b>Also alert — and deliberately silent.</b>', '<b>Also a warning — and deliberately silent.</b>', 'drive note 4');
script = once(script, 'but the alert holds.</b>', 'but the warning holds.</b>', 'drive note 5a');
script = once(script, 'Alert only releases below 55', 'A warning only releases below 55', 'drive note 5b');
script = once(script, 'but alert exits below 55', 'but a warning exits below 55', 'drive why 5');
const TOGGLE = `/* V10: one diagram, two states. Without script both states stay on the page. */
[].slice.call(document.querySelectorAll('.v10')).forEach(function(fig){
  var tg=fig.querySelector('.v10-tg');
  var btns=[].slice.call(fig.querySelectorAll('.v10-tg button'));
  var views=[].slice.call(fig.querySelectorAll('.v10-view'));
  if(!tg||!btns.length)return;
  function show(k){
    btns.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-v')===k?'true':'false');});
    views.forEach(function(v){v.hidden=v.getAttribute('data-v')!==k;});
  }
  btns.forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-v'));});});
  tg.hidden=false;
  show('without');
});

/* V1: the recording holds on its last frame while motion is off. It follows the
   motion switch, which already starts from the system preference. */
(function(){
  var img=document.querySelector('.v1-flow'); if(!img)return;
  var gif=img.getAttribute('src'), still=img.getAttribute('data-still');
  function sync(){ var want=root.getAttribute('data-motion')==='off'?still:gif;
    if(img.getAttribute('src')!==want)img.setAttribute('src',want); }
  sync();
  new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-motion']});
})();

/* R5: pointing at a rule lifts the sources it rests on */
(function(){
  var r5=document.getElementById('svgR5'); if(!r5)return;
  [].slice.call(r5.querySelectorAll('.rnode')).forEach(function(g,i){
    g.addEventListener('mouseenter',function(){ r5.classList.add('focus'); g.classList.add('on');
      [].slice.call(r5.querySelectorAll('.rib.r'+i)).forEach(function(x){x.classList.add('on');}); });
    g.addEventListener('mouseleave',function(){ r5.classList.remove('focus'); g.classList.remove('on');
      [].slice.call(r5.querySelectorAll('.rib.on')).forEach(function(x){x.classList.remove('on');}); });
  });
})();

`;
/* measured after the word swaps above, which change the script's length */
const d0 = script.indexOf('/* ═══ which app is in the middle ═══');
const d1 = script.indexOf('/* the blueprints fold away');
must(d0 > 0 && d1 > d0, 'script cut points');
script = script.slice(0, d0) + TOGGLE + script.slice(d1);

const out = head + chrome + body + '\n\n' + script + '\n<script src="/site-mobile.js" defer></script>\n</body>\n</html>\n';
/* the site's motion contract (data-motion full|reduced) and its shared files */
fs.writeFileSync(REPO + '/public/case-study-04-signal.html', require('../surface-swap.js')(require('../motion-rename.js')(out)));
console.log('page bytes', out.length);

/* ── the embed keeps two columns down to 700px, so it fits the frame on the page ── */
const embPath = REPO + '/public/signal/reliability-signal-embed.html';
let emb = fs.readFileSync(embPath, 'utf8');
const EMB_CSS = '<style id="embed-fit">@media (max-width:1020px) and (min-width:700px){.layout{grid-template-columns:minmax(0,1fr) minmax(220px,300px);gap:24px;padding:24px 20px}.stagecol{position:sticky;top:20px}}</style>';
if(!emb.includes('id="embed-fit"')){ emb = once(emb, '</head>', EMB_CSS + '\n</head>', 'embed head'); fs.writeFileSync(embPath, emb); console.log('embed fitted'); }
