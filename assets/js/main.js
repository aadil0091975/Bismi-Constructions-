// BISMI Construction — site script

// Mobile menu: full-screen on phones; tapping a section link jumps there and closes it
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  const mq = window.matchMedia("(max-width: 860px)");
  const setOpen = (open) => {
    nav.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.documentElement.classList.toggle("menu-locked", open && mq.matches);
  };
  const sync = () => setOpen(!mq.matches);
  sync();
  mq.addEventListener("change", sync);
  toggle.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { if (mq.matches) setOpen(false); }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mq.matches && nav.dataset.open === "true") { setOpen(false); toggle.focus(); }
  });
}

// Project photo viewer
const box = document.getElementById("lightbox");
if (box && typeof box.showModal === "function") {
  const img = box.querySelector("img");
  document.querySelectorAll(".shot button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const thumb = btn.querySelector("img");
      img.src = thumb.currentSrc || thumb.src;
      img.alt = thumb.alt;
      box.showModal();
    });
  });
  box.querySelector(".close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
