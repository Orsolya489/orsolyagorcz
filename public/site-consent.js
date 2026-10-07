/* site-consent.js — analytics, only with consent. Shared by every page.
   Google Analytics 4 and Microsoft Clarity load only after a visitor accepts.
   The choice is remembered; the accessibility panel's Analytics row changes it. */
(function(){
  /* ── the two IDs. Leave either empty and that tool never loads. ── */
  var GA_ID = 'G-9JFQBK829V';        /* Google Analytics 4 Measurement ID, e.g. G-XXXXXXXXXX */
  var CLARITY_ID = 'ytkbn367fz';   /* Microsoft Clarity project ID, e.g. abcd1234ef */

  var KEY = 'og-consent';
  /* the banner names only the tools that are switched on */
  var TOOLS = [GA_ID && 'Google Analytics', CLARITY_ID && 'Microsoft Clarity'].filter(Boolean).join(' and ');
  if (!GA_ID && !CLARITY_ID) return;

  function get(){ try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v){ try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function load(){
    if (loaded) return; loaded = true;
    if (GA_ID) {
      window['ga-disable-' + GA_ID] = false;
      var g = document.createElement('script'); g.async = true;
      g.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', GA_ID, { anonymize_ip: true });
    }
    if (CLARITY_ID) {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, 'clarity', 'script', CLARITY_ID);
      window.clarity('consent');
    }
  }
  /* withdrawing: stop GA, clear the cookies both tools set, and reload so
     nothing already running keeps going */
  function revoke(){
    if (GA_ID) window['ga-disable-' + GA_ID] = true;
    document.cookie.split(';').forEach(function(c){
      var n = c.split('=')[0].trim();
      if (/^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/.test(n)) {
        [location.hostname, '.' + location.hostname.replace(/^www\./, '')].forEach(function(d){
          document.cookie = n + '=; Max-Age=0; path=/; domain=' + d;
        });
        document.cookie = n + '=; Max-Age=0; path=/';
      }
    });
    if (loaded) location.reload();
  }

  /* ── the banner ── */
  var banner;
  function hideBanner(){ if (banner) { banner.remove(); banner = null; } }
  function showBanner(){
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Analytics consent');
    banner.innerHTML =
      '<p class="consent-t">This site uses ' + TOOLS + ' to see how its pages are read. Nothing is collected unless you accept.</p>' +
      '<div class="consent-b">' +
        '<button type="button" class="btn" data-c="denied">Decline</button>' +
        '<button type="button" class="btn btn--on" data-c="granted">Accept</button>' +
      '</div>';
    banner.addEventListener('click', function(e){
      var b = e.target.closest('[data-c]'); if (!b) return;
      choose(b.getAttribute('data-c'));
    });
    document.body.appendChild(banner);
  }
  function choose(v){
    set(v); hideBanner(); sync();
    if (v === 'granted') load(); else revoke();
  }

  /* ── the panel row ── */
  var row, rowBtn;
  function addRow(){
    var panel = document.getElementById('panel'); if (!panel || row) return;
    row = document.createElement('div'); row.className = 'prow';
    row.innerHTML = '<span>Analytics</span><button class="btn" type="button" aria-pressed="false">Off</button>';
    rowBtn = row.querySelector('button');
    rowBtn.addEventListener('click', function(){ choose(get() === 'granted' ? 'denied' : 'granted'); });
    var note = panel.querySelector('.pnote');
    panel.insertBefore(row, note || null);
    sync();
  }
  function sync(){
    if (!rowBtn) return;
    var on = get() === 'granted';
    rowBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    rowBtn.textContent = on ? 'On' : 'Off';
    rowBtn.classList.toggle('btn--on', on);
  }

  /* ── named events. Sent to both tools, and only once the visitor has accepted. ── */
  function track(name, params){
    if (!loaded || get() !== 'granted') return;
    params = params || {};
    if (GA_ID && window.gtag) gtag('event', name, params);
    if (CLARITY_ID && window.clarity) {
      window.clarity('event', name);
      Object.keys(params).forEach(function(k){ window.clarity('set', name + '_' + k, String(params[k])); });
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
      else if (/github\.com/.test(href)) track('social_click', { network: 'github', location: where(el), page: page });
      else if (/^\/case-study-/.test(href)) track('case_study_open', { case_study: href.replace('/', ''), from: el.closest('.card') ? 'home card' : el.closest('.next') ? 'next list' : 'link', page: page });
      else if (/figma\.site|reliability-signal-embed/.test(href)) track('prototype_interact', { prototype: /figma/.test(href) ? 'mindure' : 'signal', how: 'opened', page: page });
      else if (el.id === 'noiseBtn' || el.id === 'noiseBtnM') setTimeout(function(){ if (el.getAttribute('aria-pressed') === 'true') track('noise_on', { page: page }); }, 0);
      else if (el.closest('#panel') && (el.hasAttribute('data-text') || el.id === 'contrastBtn' || el.id === 'motionBtn'))
        setTimeout(function(){
          track('accessibility_change', { setting: el.hasAttribute('data-text') ? 'text size' : el.id === 'contrastBtn' ? 'high contrast' : 'reduce motion',
            value: el.hasAttribute('data-text') ? el.getAttribute('data-text') : (el.getAttribute('aria-pressed') === 'true' ? 'on' : 'off'), page: page });
        }, 0);
    });
    /* home cards also open on Enter */
    document.addEventListener('keydown', function(e){
      if (e.key !== 'Enter') return;
      var c = e.target.closest && e.target.closest('.card[data-href]');
      if (c) track('case_study_open', { case_study: c.getAttribute('data-href').replace('/', ''), from: 'home card', page: page });
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
    addRow();
    wire();
    var c = get();
    if (c === 'granted') load();
    else if (c !== 'denied') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
