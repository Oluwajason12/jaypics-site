// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.classList.add('scroll-top');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section fade-in on scroll
const sections = document.querySelectorAll('#features, #pricing, #contact');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) section.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
// Animate pricing cards on scroll
const pricingCards = document.querySelectorAll('.pricing-card');

const revealPricing = () => {
  const triggerBottom = window.innerHeight * 0.85;
  pricingCards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealPricing);
revealPricing(); // run once on load
