// The motion contract: <html data-motion="full|reduced">, replacing the old "off" value.
// Used on the static pages once, and by the Signal build on every run.
module.exports = function(s){
  return s
    .replace(/data-motion="off"/g, 'data-motion="reduced"')
    .replace(/getAttribute\('data-motion'\)==='off'/g, "getAttribute('data-motion')==='reduced'")
    .replace(/getAttribute\("data-motion"\)==="off"/g, 'getAttribute("data-motion")==="reduced"')
    .replace(/setAttribute\('data-motion','off'\)/g, "setAttribute('data-motion','reduced')")
    .replace(/removeAttribute\('data-motion'\)/g, "setAttribute('data-motion','full')")
    .replace('<html lang="en">', '<html lang="en" data-motion="full">')
    .replace('<link rel="stylesheet" href="/site-mobile.css">', '<link rel="stylesheet" href="/site-mobile.css">\n<link rel="stylesheet" href="/site-motion.css">\n<link rel="stylesheet" href="/site-ui.css">')
    .replace('<script src="/site-mobile.js" defer></script>', '<script src="/site-mobile.js" defer></script>\n<script src="/site-motion.js" defer></script>\n<script src="/site-consent.js" defer></script>');
};
