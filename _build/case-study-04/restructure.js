// One-off: reshapes body.html into six sections for the research rebuild.
const fs = require('fs');
const P = __dirname + '/body.html';
let b = fs.readFileSync(P, 'utf8');
const must = (c, m) => { if(!c){ console.error('FAIL: ' + m); process.exit(1); } };
const once = (s, f, r, l) => { const n = s.split(f).length - 1; must(n === 1, l + ' matched ' + n); return s.replace(f, r); };
function block(open, close){
  const i = b.indexOf(open); must(i >= 0, 'missing ' + open);
  const j = b.indexOf(close, i); must(j >= 0, 'missing close for ' + open);
  return b.slice(i, j + close.length);
}
function paraContaining(start){
  const i = b.indexOf('<p>' + start); must(i >= 0, 'missing paragraph ' + start.slice(0,30));
  return b.slice(i, b.indexOf('</p>', i) + 4);
}

const V10 = block('<figure class="dgm dgm--frame v10">', '</figure>');
const V5  = block('<figure class="dgm dgm--tall v5">', '</figure>');
const V6  = block('<figure class="dgm v6-fig">', '</figure>');
const V11 = block('<figure class="dgm v11-fig">', '</figure>');
let   V7  = block('<figure class="dgm v7">', '</figure>');
V7 = once(V7, '            <tr><th scope="row">People keep the judgment</th><td>Survey, 84%</td><td>Point at the answer; the verdict stays with the person</td></tr>\n', '', 'V7 row 1');
V7 = once(V7, '            <tr><th scope="row">Bias is already expected</th><td>Survey, 4.02 / 5</td><td>Name the specific reason</td></tr>\n', '', 'V7 row 2');

const pMapped   = paraContaining('Before designing any screen');
const pColour   = paraContaining('Colour is a tint');
const pSound    = paraContaining('Sound is two soft');
const pOrb      = paraContaining('The orb turns once');
const pCare     = paraContaining('The words carry as much care');
const pSupport  = paraContaining('Someone in crisis never meets an alarm');
const pVibe     = paraContaining('<b>The hardest call was about vibration.</b>');
const pUnder    = paraContaining('Underneath, the layer asks');
const pWhere    = paraContaining('<b>Where it could live.</b>');

const RESEARCH = `<section class="sec" id="s2" data-bar="The research" aria-labelledby="s2h">
      <h2 class="sec-label" id="s2h">About four-fifths of the project was research.</h2>

{{R1}}

      <div class="sec-copy">
        <p>I spent most of the project reading and asking before drawing anything, because my first idea turned out to be wrong.</p>
      </div>

{{R2}}

      <div class="sec-copy">
        <p>The survey had one job: to test that idea before I built on it. I wrote a Hungarian and an English version on their own terms, and 83 people answered. 14 of the respondents were under 18. The survey was anonymous and asked for no names or email addresses. Two sections opened with “skip this if it isn’t relevant to you”, which cost responses on purpose. The section on long conversations broke the hypothesis; the next one set the rule the whole design follows.</p>
        <p>People say the judgment is theirs: 84% placed it with the person. Research on automation bias shows people defer to confident systems anyway. The layer is designed for that gap, between the judgment people claim and the one they give away.</p>
      </div>

{{R3}}

      <div class="sec-copy">
        <p>Two-thirds found a gentle real-time signal useful, when it was described at its gentlest. Even then, a third were neutral or against, so the hard problem became when to stay silent.</p>
      </div>

{{R4}}

      <div class="sec-copy">
        <p>A survey tells you what people believe about themselves. It can’t tell you why a confident wrong answer gets believed, or how strong a cue must be to be noticed. For that I read across five fields.</p>
      </div>

{{R5}}
    </section>

    <section class="sec" id="s3" data-bar="The system" aria-labelledby="s3h">
      <h2 class="sec-label" id="s3h">The system</h2>

      <div class="sec-copy">
        ${pMapped}
      </div>

      ${V10}

      <div class="sec-copy">
        ${pUnder}
        ${pWhere}
      </div>

      ${V11}

      ${V7}
    </section>

    <section class="sec" id="s4" data-bar="The design" aria-labelledby="s4h">
      <h2 class="sec-label" id="s4h">Visible, but not too visible.</h2>

      <div class="sec-copy">
        <p>The interface took the least time, because by then most of the decisions had been made.</p>
      </div>

      ${V5}

      <div class="sec-copy">
        ${pColour}
        ${pSound}
      </div>

      ${V6}

      <div class="sec-copy">
        ${pOrb}
        ${pCare}
        ${pSupport}
        ${pVibe}
      </div>
    </section>
`;

// everything from the old research section to the end of the old design section is replaced
const a = b.indexOf('<section class="sec" id="s2"'); const z = b.indexOf('<section class="sec" id="s4"');
must(a > 0 && z > a, 'section bounds');
b = b.slice(0, a) + RESEARCH + '\n    ' + b.slice(z);

// the prototype and what's next move down one
b = once(b, '<section class="sec" id="s4" data-bar="The prototype" aria-labelledby="s4h">\n      <h2 class="sec-label" id="s4h">', '<section class="sec" id="s5" data-bar="The prototype" aria-labelledby="s5h">\n      <h2 class="sec-label" id="s5h">', 'prototype id');
b = once(b, '<section class="sec" id="s5" data-bar="What’s next" aria-labelledby="s5h">\n      <h2 class="sec-label" id="s5h">', '<section class="sec" id="s6" data-bar="What’s next" aria-labelledby="s6h">\n      <h2 class="sec-label" id="s6h">', 'next id');

// 5B, after "The data corrected both."
b = once(b, '<p>I designed for attention first, and I had the system explaining itself. The data corrected both.</p>',
  '<p>I designed for attention first, and I had the system explaining itself. The data corrected both.</p>\n        <p>Two survey questions leaned toward the answers I hoped for. One mixed accountability with the work of being careful; the other described the idea at its gentlest. I read their results as upper bounds, and the planned study would measure behaviour instead.</p>', '5B');

fs.writeFileSync(P, b);
console.log('restructured; sections:', (b.match(/<section class="sec" id="s\d"/g) || []).join(' '));
