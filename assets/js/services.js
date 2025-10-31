// ============================
// BISMI CONSTRUCTION - Services
// ============================

// Fade-in animation when scrolling
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = { threshold: 0.3 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Mobile navigation toggle
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// Close mobile nav on link click
document.querySelectorAll("#mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});
// Service item hover effect
document.querySelectorAll(".service-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hovered");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
  });
});