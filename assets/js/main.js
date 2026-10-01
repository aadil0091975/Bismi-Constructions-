// BISMI Construction — shared site script

const WHATSAPP = "919037641141";

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  const setOpen = (open) => {
    nav.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  const mq = window.matchMedia("(max-width: 860px)");
  const sync = () => setOpen(!mq.matches);
  sync();
  mq.addEventListener("change", sync);
  toggle.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mq.matches && nav.dataset.open === "true") { setOpen(false); toggle.focus(); }
  });
}

// Project photo viewer
const box = document.getElementById("lightbox");
if (box && typeof box.showModal === "function") {
  const img = box.querySelector("img");
  const cap = box.querySelector("p");
  document.querySelectorAll(".shot button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const thumb = btn.querySelector("img");
      img.src = thumb.currentSrc || thumb.src;
      img.alt = thumb.alt;
      cap.textContent = btn.closest("figure").querySelector("figcaption").textContent.replace(/\s+/g, " ").trim();
      box.showModal();
    });
  });
  box.querySelector(".close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
}

// Enquiry form: there is no server on GitHub Pages, so it opens WhatsApp with the message filled in
const form = document.getElementById("enquiry");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (id) => document.getElementById(id).value.trim();
    const lines = [
      "Hi BISMI Construction, I'd like to discuss a project.",
      "",
      `Name: ${v("f-name")}`,
      `Phone: ${v("f-phone")}`,
      `Work needed: ${v("f-type")}`,
    ];
    if (v("f-place")) lines.push(`Site location: ${v("f-place")}`);
    if (v("f-msg")) lines.push(`Details: ${v("f-msg")}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
