/* site-motion.js — the motion system's behaviour, shared by every page. */
(function(){
  var root = document.documentElement;
  var reduced = function(){ return root.getAttribute('data-motion') === 'reduced'; };

  /* An explicit choice outranks the system setting on later visits. The page's
     own script has already applied the system setting and shown it on the
     switch; a stored choice that differs presses the switch back. */
  var mb = document.getElementById('motionBtn'), KEY = 'og-motion';
  if (mb) {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && saved !== root.getAttribute('data-motion')) mb.click();
    } catch (e) {}
    mb.addEventListener('click', function(){
      try { localStorage.setItem(KEY, root.getAttribute('data-motion') || 'full'); } catch (e) {}
    });
  }

  /* high contrast cross-fades instead of snapping */
  var cb = document.getElementById('contrastBtn');
  if (cb) cb.addEventListener('click', function(){
    root.classList.add('mt-swap');
    setTimeout(function(){ root.classList.remove('mt-swap'); }, 320);
  }, true);

  /* figures below the fold fade in once; anything already on screen stays as it is */
  if ('IntersectionObserver' in window && !reduced()) {
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    [].forEach.call(document.querySelectorAll('.sec > figure, .sec > .fig, .sec > .rfig, .sec > .vframe, .about-grid'), function(f){
      if (f.getBoundingClientRect().top < innerHeight) return;
      f.classList.add('reveal'); io.observe(f);
    });
  }

  /* Signal's hero recording plays once and holds; a click plays it again */
  var flow = document.querySelector('.v1-flow');
  if (flow && window.matchMedia('(min-width: 768px)').matches) {
    var blob = null;
    flow.style.cursor = 'pointer';
    flow.addEventListener('click', function(){
      if (reduced()) return;
      var play = function(){ flow.src = URL.createObjectURL(blob); };
      if (blob) play(); else fetch(flow.getAttribute('src')).then(function(r){ return r.blob(); }).then(function(b){ blob = b; play(); });
    });
  }
})();

/* ── images: a placeholder until each one arrives (styled in site-ui.css) ── */
(function(){
  function mark(img){
    if (!img.getAttribute('src') || (img.complete && img.naturalWidth)) return;
    img.setAttribute('data-loading', '');
    var done = function(){ img.removeAttribute('data-loading'); };
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }
  function scan(){ [].forEach.call(document.images, mark); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();

/* ── case-study header: the progress rail ends where the last section name
   ends, not at the edge of the column, and the section counter steps aside
   once the names grow into it (a larger text size). Re-measured when the
   window, the fonts or the text size change. ── */
(function(){
  function init(){
    var rail = document.querySelector('.csbar-rail'), ol = document.querySelector('.cs-route ol');
    if (!rail || !ol || !ol.lastElementChild) return;
    var last = ol.lastElementChild, count = document.querySelector('.csbar-count');
    function fit(){
      rail.style.width = '';
      if (count) count.style.visibility = '';
      if (!rail.offsetWidth) return;
      var lr = last.getBoundingClientRect();
      var w = lr.right - rail.getBoundingClientRect().left;
      if (w > 0 && w < rail.offsetWidth) rail.style.width = Math.round(w) + 'px';
      /* the names and the counter share the right end of the bar: when they
         would meet, the counter goes - the names say where you are anyway */
      if (count && count.offsetWidth && lr.right + 12 > count.getBoundingClientRect().left) count.style.visibility = 'hidden';
    }
    fit();
    window.addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(last);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ── case studies: smooth wheel scrolling (Lenis). Only on the case studies;
   home keeps its own card stepping. Wheel and touchpad only: touch screens
   keep their native scroll. Follows the Reduce motion switch, which already
   carries the system setting, so it is built and taken down as that changes.
   Section links still land under the header (Lenis reads scroll-margin-top). ── */
(function(){
  var root = document.documentElement;
  if (!document.querySelector('.cs-body')) return;
  var lenis = null, loading = false;
  var css = document.createElement('style');
  css.textContent =
    'html.lenis,html.lenis body{height:auto}' +
    'html.lenis{scroll-behavior:auto !important}' +
    '.lenis:not(.lenis-autoToggle).lenis-stopped{overflow:clip}' +
    '.lenis [data-lenis-prevent]{overscroll-behavior:contain}' +
    '.lenis.lenis-smooth iframe{pointer-events:none}';
  document.head.appendChild(css);
  function build(){
    if (lenis || root.getAttribute('data-motion') === 'reduced') return;
    lenis = new window.Lenis({
      autoRaf: true,
      /* the glide runs on after the wheel stops, so a full native step per
         notch overshoots: a shorter step, settling a little sooner */
      wheelMultiplier: 0.6,
      lerp: 0.12,
      respectReducedMotion: false,
      /* Signal's wide diagrams scroll sideways under a touchpad, as before */
      allowNestedScroll: true,
      /* the settings panel, an open lightbox and anything marked keep their own scroll */
      prevent: function(n){ return !!(n.closest && n.closest('#panel, dialog[open], [data-lenis-prevent]')); }
    });
  }
  function sync(){
    if (root.getAttribute('data-motion') === 'reduced') { if (lenis) { lenis.destroy(); lenis = null; } return; }
    if (window.Lenis) return build();
    if (loading) return;
    loading = true;
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/lenis@1.3.27/dist/lenis.min.js';
    s.integrity = 'sha384-R18XzqnxvVLEF+BYfhpmDx30v7eP83fAckyfoRzK7/Uf6nGqufcmsk0eAKo7S3RU';
    s.crossOrigin = 'anonymous';
    s.onload = build;
    document.head.appendChild(s);
  }
  /* links to a section on the page glide there, as they did with smooth
     scroll-behavior, and the address still shows the section. Pointer clicks
     only: from the keyboard the browser's own jump also moves focus there. */
  document.addEventListener('click', function(e){
    if (!lenis || !e.detail || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    var t = a && a.getAttribute('href').length > 1 && document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
    if (!t) return;
    e.preventDefault();
    history.pushState(null, '', a.getAttribute('href'));
    lenis.scrollTo(t);
  });
  new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['data-motion'] });
  sync();
})();
