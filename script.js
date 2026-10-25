/*
  ZAYMARO site settings:
  1) Replace WHATSAPP_NUMBER with your business number in international format, digits only.
     Example Saudi: 9665XXXXXXXX | Pakistan: 923XXXXXXXXX
  2) Replace INSTAGRAM_URL with your actual Instagram profile.
  3) Change currency/prices and product details when ready.
*/
const WHATSAPP_NUMBER = ""; // Example: "9665XXXXXXXX"
const INSTAGRAM_URL = "";   // Example: "https://www.instagram.com/yourbrand"
const DEFAULT_MESSAGE = "Hello ZAYMARO, I would like to enquire about your watches and perfumes.";

const wa = document.getElementById("whatsappLink");
if (WHATSAPP_NUMBER) {
  wa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
} else {
  wa.href = "https://wa.me/?text=" + encodeURIComponent(DEFAULT_MESSAGE);
}
const insta = document.getElementById("instagramLink");
if (INSTAGRAM_URL) {
  insta.href = INSTAGRAM_URL;
} else {
  insta.href = "https://www.instagram.com/";
}
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
