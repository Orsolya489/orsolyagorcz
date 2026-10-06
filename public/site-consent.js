/* site-consent.js — analytics, only with consent. Shared by every page.
   Google Analytics 4 and Microsoft Clarity load only after a visitor accepts.
   The choice is remembered; the accessibility panel's Analytics row changes it. */
(function(){
  /* ── the two IDs. Leave either empty and that tool never loads. ── */
  var GA_ID = '';        /* Google Analytics 4 Measurement ID, e.g. G-XXXXXXXXXX */
  var CLARITY_ID = '';   /* Microsoft Clarity project ID, e.g. abcd1234ef */

  var KEY = 'og-consent';
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
      '<p class="consent-t">This site uses Google Analytics and Microsoft Clarity to see how its pages are read. Nothing is collected unless you accept.</p>' +
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

  function start(){
    addRow();
    var c = get();
    if (c === 'granted') load();
    else if (c !== 'denied') showBanner();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
