// header.js - global navigation toggle (used on every page)

// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navbar') || document.querySelector('nav.nav');

// Helper to set aria-expanded
function setAria(expanded){
  if(menuToggle) menuToggle.setAttribute('aria-expanded', String(expanded));
}

// Toggle function
if(menuToggle && nav){
  menuToggle.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('show');
    // keep both classes for compatibility
    nav.classList.toggle('open', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    setAria(isOpen);
  });

  // Close nav when a link is clicked (mobile friendly)
  nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    nav.classList.remove('show','open');
    menuToggle.classList.remove('active');
    setAria(false);
  }));
}
