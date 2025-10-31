// =======================================
// BISMI Construction — Home Page Script
// =======================================

// Hero background image rotation
const hero = document.querySelector('.hero');
if (hero) {
  const images = [
    'assets/images/image1.jpg',
    'assets/images/image2.jpg',
    'assets/images/image3.jpg'
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `
      linear-gradient(rgba(46,43,41,0.6), rgba(46,43,41,0.6)),
      url('${images[index]}')
    `;
  }, 4000);
}

// Fade-in effect
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });

faders.forEach(fader => observer.observe(fader));
