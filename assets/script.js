// Smooth scroll for on-page anchors
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Safety: if a duplicate On-Panel banner slipped in from cache or previous HTML,
// keep only the first instance on the page.
window.addEventListener('DOMContentLoaded', () => {
  const banners = document.querySelectorAll('#onpanel-banner, [data-onpanel]');
  if (banners.length > 1) {
    for (let i = 1; i < banners.length; i++) {
      banners[i].parentElement && banners[i].parentElement.removeChild(banners[i]);
    }
  }

  // Header phones dropdown
  const toggle = document.getElementById('phones-toggle');
  const panel = document.getElementById('phones-panel');
  if (toggle && panel) {
    const show = () => panel.classList.remove('hidden');
    const hide = () => panel.classList.add('hidden');
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && !toggle.contains(e.target)) hide();
    });
  }

  // Hero image fallback if missing
  const heroImg = document.getElementById('hero-cbct');
  if (heroImg) {
    let tried = 0;
    const sources = [
      'assets/img/dental-cbct.jpg',
      'assets/img/dental-cbct.png',
      'assets/img/dental-cbct.svg',
      // last resort: previously used external hero
      'https://upload.wikimedia.org/wikipedia/commons/1/16/Cone_Beam_CT.jpg',
      'assets/img/placeholder-hero.svg'
    ];
    const onError = () => {
      tried++;
      if (tried < sources.length) heroImg.src = sources[tried];
    };
    heroImg.addEventListener('error', onError);
  }

  // Services analysis image fallback if external fails
  const analysisImg = document.getElementById('analysis-img');
  if (analysisImg) {
    let triedA = 0;
    const sourcesA = [
      'assets/img/analysis.jpg',
      'assets/img/analysis.png',
      'assets/img/analysis.svg',
      // last resort: previous external analysis image
      'https://cosmos-imaging-static.lovable.app/assets/medical-analysis-DNnk-cQX.jpg',
      'assets/img/analysis-illustration.svg'
    ];
    const onErrA = () => {
      triedA++;
      if (triedA < sourcesA.length) analysisImg.src = sourcesA[triedA];
    };
    analysisImg.addEventListener('error', onErrA);
  }
});
