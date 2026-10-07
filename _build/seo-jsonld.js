/* seo-jsonld.js — adds a case study's structured data (schema.org Article) to its <head>.
   Every value is read from the page's own head tags, so the data never says
   anything the page does not. Running it twice changes nothing.
   Used by: _build/case-study-04/build.js, and once by hand on Tribe and Mindure:
     node _build/seo-jsonld.js public/case-study-01-tribe.html */
const SITE = 'https://orsolyagorcz.com/';

function attr(html, re) { const m = html.match(re); return m ? m[1] : ''; }
const unesc = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

module.exports = function addArticle(html) {
  if (html.includes('"@type":"Article"')) return html;
  const url = attr(html, /<link rel="canonical" href="([^"]+)">/);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: unesc(attr(html, /<title>([^<]+)<\/title>/)),
    description: unesc(attr(html, /<meta name="description" content="([^"]*)">/)),
    image: attr(html, /<meta property="og:image" content="([^"]+)">/),
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    author: { '@type': 'Person', '@id': SITE + '#person', name: 'Orsolya G.', url: SITE },
    publisher: { '@type': 'Person', '@id': SITE + '#person' },
    isPartOf: { '@type': 'WebSite', '@id': SITE + '#website' }
  };
  const tag = '<script type="application/ld+json">' + JSON.stringify(data).replace(/</g, '\\u003c') + '</script>';
  return html.replace(/(<link rel="canonical" href="[^"]+">)/, '$1\n' + tag);
};

if (require.main === module) {
  const fs = require('fs');
  for (const f of process.argv.slice(2)) fs.writeFileSync(f, module.exports(fs.readFileSync(f, 'utf8')));
}
