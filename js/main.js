/* ─────────────────────────────────────────
   TH Ar-Condicionado — Scripts Principais
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL REVEAL ───────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));


  // ─── COUNT-UP NOS STATS ──────────────────────────────────────────
  function countUp(el, target, suffix) {
    let current = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (suffix || '');
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  const statNums = document.querySelectorAll('.stat-num');

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = target === 100 ? '%' : '+';

        countUp(el, target, suffix);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));


  // ─── NAV — ESCURECER AO ROLAR ─────────────────────────────────────
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(7, 17, 30, 0.96)'
      : 'rgba(7, 17, 30, 0.75)';
  });

});
