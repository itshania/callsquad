const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
if (nav && toggle) document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
}));
const yearElement = document.getElementById('year'); if (yearElement) yearElement.textContent = new Date().getFullYear();
const leadForm = document.getElementById('lead-form');
if (leadForm) leadForm.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.toast').classList.add('show');
  event.target.reset();
  setTimeout(() => document.querySelector('.toast').classList.remove('show'), 4200);
});


const header = document.querySelector('.site-header');
const setHeaderState = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('is-visible'); serviceObserver.unobserve(target); }
  });
}, { threshold: .12 });
serviceCards.forEach(card => serviceObserver.observe(card));
const whySection = document.querySelector('.why-section');
if (whySection) {
  const whyObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { whySection.classList.add('is-visible'); whyObserver.disconnect(); }
  }, { threshold: .2 });
  whyObserver.observe(whySection);
}
const offerCards = document.querySelectorAll('.offer-card');
const offerObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('is-visible'); offerObserver.unobserve(target); }
  });
}, { threshold: .12 });
offerCards.forEach(card => offerObserver.observe(card));
const coverageSection = document.querySelector('.coverage-section');
if (coverageSection) {
  const coverageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { coverageSection.classList.add('is-visible'); coverageObserver.disconnect(); }
  }, { threshold: .18 });
  coverageObserver.observe(coverageSection);
}
const faqSection = document.querySelector('.faq');
if (faqSection) {
  const faqObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { faqSection.classList.add('is-visible'); faqObserver.disconnect(); }
  }, { threshold: .16 });
  faqObserver.observe(faqSection);
}
const sectionNavLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
if (sectionNavLinks.length) {
  const navSections = sectionNavLinks.map(link => ({ link, section: document.querySelector(link.getAttribute('href')) })).filter(item => item.section);
  const updateActiveNav = () => {
    const position = window.scrollY + 160;
    let active = navSections[0];
    navSections.forEach(item => { if (item.section.offsetTop <= position) active = item; });
    navSections.forEach(item => item.link.classList.toggle('active', item === active));
  };
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav, { passive: true });
}