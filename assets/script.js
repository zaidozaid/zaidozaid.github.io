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
});
