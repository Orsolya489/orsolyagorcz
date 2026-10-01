/* site-mobile.js — phone-only behaviour shared by the home page and the case studies.
   1. The accessibility panel's noise switch says On or Off.
   2. Tapping a picture opens it full screen; pinch to zoom, tap or × to close. */
(function(){
  var MQ = window.matchMedia('(max-width: 767px)');

  var nm = document.getElementById('noiseBtnM');
  if (nm) new MutationObserver(function(){
    nm.textContent = nm.getAttribute('aria-pressed') === 'true' ? 'On' : 'Off';
  }).observe(nm, { attributes: true, attributeFilter: ['aria-pressed'] });

  if (!window.HTMLDialogElement) return;
  /* things that already answer a tap keep their own behaviour */
  var SKIP = 'a,button,[role="link"],label,dialog,.card,.chrome,.chrome-shell,.cmp-stage,.phone-frames,#road';

  var dlg = document.createElement('dialog');
  dlg.className = 'mlb';
  dlg.setAttribute('aria-label', 'Enlarged image');
  dlg.innerHTML = '<button type="button" class="mlb-x" aria-label="Close">×</button><div class="mlb-in"></div>';
  var box = dlg.querySelector('.mlb-in');
  dlg.addEventListener('click', function(){ dlg.close(); });
  dlg.addEventListener('close', function(){ box.innerHTML = ''; });

  function target(el){
    if (el.closest(SKIP)) return null;
    if (el.tagName === 'IMG') {
      var f = el.closest('figure');
      return (f && f.querySelector('.zoom')) ? null : el;   /* Mindure's figures have their own */
    }
    var svg = el.closest('svg');
    while (svg && svg.parentElement.closest('svg')) svg = svg.parentElement.closest('svg');
    if (!svg || !svg.closest('figure') || svg.getBoundingClientRect().width < 160) return null;
    return svg;
  }

  document.addEventListener('click', function(e){
    if (!MQ.matches || !(e.target instanceof Element)) return;
    var t = target(e.target);
    if (!t) return;
    e.preventDefault();
    if (t.tagName === 'IMG') {
      var img = new Image(); img.src = t.currentSrc || t.src; img.alt = t.alt;
      box.appendChild(img);
    } else {
      /* the copy keeps its figure's classes, so the drawing's own styles reach it */
      var wrap = document.createElement('div');
      wrap.className = 'mlb-svg ' + t.closest('figure').className;
      wrap.appendChild(t.cloneNode(true));
      box.appendChild(wrap);
    }
    if (!dlg.isConnected) document.body.appendChild(dlg);
    dlg.showModal();
  });
})();
