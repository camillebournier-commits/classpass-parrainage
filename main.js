/* ══════════════════════════════════════════════
   ClassPass Parrainage — main.js
   ══════════════════════════════════════════════ */

/* ── FAQ TOGGLE ── */
function toggleFAQ(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all open items
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  // Open clicked item if it wasn't already open
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── UTM TRACKING ── */
/* Appends UTM parameters to all referral links for analytics tracking */
document.querySelectorAll('a[href*="classpass.com/refer"]').forEach(link => {
  const url = new URL(link.href);
  url.searchParams.set('utm_source', 'parrainage-site');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', '917EDOUF1');
  link.href = url.toString();
});
