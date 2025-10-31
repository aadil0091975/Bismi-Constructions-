// ============================
// BISMI Construction - Contact Page Script
// ============================

// Animate contact cards when they enter viewport
const cards = document.querySelectorAll('.contact-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Fade-in effect for sections
const faders = document.querySelectorAll('.fade-in');
faders.forEach(fader => observer.observe(fader));
