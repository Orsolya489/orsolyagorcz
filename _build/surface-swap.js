// Page and card surfaces swap: the page takes the darker beige, cards the lighter.
// Every surface follows its token, so things that matched the page still do.
module.exports = function(s){
  const once = (f, r) => { const n = s.split(f).length - 1; if (n !== 1) throw new Error('surface swap: ' + f + ' x' + n); s = s.replace(f, r); };
  once('--page:      #FAF5F3;', '--page:      #F2E5E2;');
  once('--card:      #F2E5E2;', '--card:      #FAF5F3;');
  // the nav's frosted glass is the page colour, so it follows it too
  once('--glass:     rgba(250,245,243,.90);', '--glass:     rgba(242,229,226,.90);');
  // the veil under the case-study header is the page colour, so it follows it
  if (s.includes('background:rgba(250,245,243,.62);')) once('background:rgba(250,245,243,.62);', 'background:rgba(242,229,226,.62);');
  // the noise slider track while sound is on
  s = s.split("rgba(250,245,243,.38)").join("rgba(242,229,226,.38)");
  return s;
};
