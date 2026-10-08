/* site-consent.js — analytics. Shared by every page.
   Umami: cookieless and anonymous, so there is no banner and no switch. It
   counts page views on its own; the named events below say what was used.
   It only counts on orsolyagorcz.com, never on a local copy. A visitor who
   switched analytics off under the old setup (stored as "denied") stays off.
   Google Analytics and Microsoft Clarity are gone; the cookies they left in
   returning visitors' browsers are cleared once, here. */
(function(){
  var UMAMI_ID = 'ce8869a4-e6de-4e27-a39d-59f6baad15ad';
  var DOMAIN = 'orsolyagorcz.com';
  var KEY = 'og-consent';

  function get(){ try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function on(){ return get() !== 'denied'; }

  /* the old tools' cookies, on this domain and its parent */
  document.cookie.split(';').forEach(function(c){
    var n = c.split('=')[0].trim();
    if (/^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/.test(n)) {
      [location.hostname, '.' + location.hostname.replace(/^www\./, '')].forEach(function(d){
        document.cookie = n + '=; Max-Age=0; path=/; domain=' + d;
      });
      document.cookie = n + '=; Max-Age=0; path=/';
    }
  });

  var loaded = false;
  function load(){
    if (loaded) return; loaded = true;
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://cloud.umami.is/script.js';
    s.setAttribute('data-website-id', UMAMI_ID);
    s.setAttribute('data-domains', DOMAIN);
    document.head.appendChild(s);
  }

  /* ── named events. Queued until Umami has loaded, then sent in order. ── */
  var queue = [];
  function flush(){
    if (!window.umami || typeof window.umami.track !== 'function') return false;
    while (queue.length) { var q = queue.shift(); window.umami.track(q[0], q[1]); }
    return true;
  }
  function track(name, params){
    if (!loaded || !on()) return;
    queue.push([name, params || {}]);
    if (!flush()) {
      var tries = 0, t = setInterval(function(){ if (flush() || ++tries > 40) clearInterval(t); }, 250);
    }
  }
  window.ogTrack = track;
  var where = function(el){
    return el.closest('.c-tr, .c-tl, .chrome-shell') ? 'header' : el.closest('.site-foot') ? 'footer' : el.closest('#panel') ? 'panel' : 'page';
  };
  var page = location.pathname.replace(/^\//, '') || 'home';

  function wire(){
    /* clicks, delegated, so later-built controls are covered too */
    document.addEventListener('click', function(e){
      var el = e.target.closest('a, button, [role="link"]'); if (!el) return;
      var href = el.getAttribute('href') || el.getAttribute('data-href') || '';
      if (/drive\.google\.com/.test(href)) track('resume_open', { location: where(el), page: page });
      else if (el.id === 'mailBtn' || el.id === 'mailCopy') track('email_copy', { location: where(el), page: page });
      else if (/linkedin\.com/.test(href)) track('social_click', { network: 'linkedin', location: where(el), page: page });
      else if (/^\/case-study-/.test(href)) track('case_study_open', { case_study: href.replace('/', ''), from: el.closest('.card') ? 'home card' : el.closest('.next') ? 'next list' : 'link', page: page });
      else if (/figma\.site|reliability-signal-embed/.test(href)) track('prototype_interact', { prototype: /figma/.test(href) ? 'mindure' : 'signal', how: 'opened', page: page });
      else if (el.id === 'noiseBtn' || el.id === 'noiseBtnM') setTimeout(function(){ if (el.getAttribute('aria-pressed') === 'true') track('noise_on', { page: page }); }, 0);
      else if (el.closest('#panel') && (el.hasAttribute('data-text') || el.id === 'contrastBtn' || el.id === 'motionBtn'))
        setTimeout(function(){
          track('accessibility_change', { setting: el.hasAttribute('data-text') ? 'text size' : el.id === 'contrastBtn' ? 'high contrast' : 'reduce motion',
            value: el.hasAttribute('data-text') ? el.getAttribute('data-text') : (el.getAttribute('aria-pressed') === 'true' ? 'on' : 'off'), page: page });
        }, 0);
    });
    /* Signal's prototype, used in place: focus moving into its frame */
    window.addEventListener('blur', function(){
      var f = document.activeElement;
      if (f && f.tagName === 'IFRAME' && /reliability-signal-embed/.test(f.src) && !f._tracked) {
        f._tracked = true; track('prototype_interact', { prototype: 'signal', how: 'used in page', page: page });
      }
    });
    /* sections: once each, when a section reaches the middle of the screen */
    if ('IntersectionObserver' in window) {
      var name = function(s){
        return s.getAttribute('data-bar') || ({ home: 'Home', work: 'In depth', more: 'In brief', about: 'About', road: 'The drive' })[s.id] || (s.classList.contains('site-foot') ? 'Footer' : s.id);
      };
      /* a section counts once it reaches the middle of the screen, or once most of
         it is in view: the last section and the footer never reach the middle */
      var seen = [];
      var hit = function(es){
        es.forEach(function(e){
          if (!e.isIntersecting || seen.indexOf(e.target) > -1) return;
          seen.push(e.target);
          track('section_view', { section: name(e.target), page: page });
        });
      };
      var mid = new IntersectionObserver(hit, { rootMargin: '-45% 0px -45% 0px' });
      var most = new IntersectionObserver(function(es){ hit(es.filter(function(e){ return e.intersectionRatio >= .6; })); }, { threshold: .6 });
      [].forEach.call(document.querySelectorAll('.sec[id], #home, #work, #more, #about, .site-foot, #road'), function(s){ mid.observe(s); most.observe(s); });
    }
  }

  function start(){
    wire();
    if (on()) load();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
