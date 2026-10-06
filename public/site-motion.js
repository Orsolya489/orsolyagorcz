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
    [].forEach.call(document.querySelectorAll('.sec > figure, .sec > .fig, .sec > .rfig, .about-grid'), function(f){
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
