// Replace this with the workshop's WhatsApp number, including country code,
// digits only. Example format for India: 91 followed by the 10-digit number.
const WHATSAPP_NUMBER = "916386011185";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Before publishing, open script.js and replace 91XXXXXXXXXX with the workshop's WhatsApp number, including country code.");
    return;
  }

  const data = new FormData(event.currentTarget);
  const message = [
    "Hello Shri Automobile, I'd like to request a service.",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Vehicle: ${data.get("vehicle")}`,
    `Service: ${data.get("service")}`,
    `Details: ${data.get("message") || "Not provided"}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
