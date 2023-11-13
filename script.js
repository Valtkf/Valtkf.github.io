const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;
const overlay = document.querySelector(".overlay");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  if (navLinks.classList.contains("mobile-menu")) {
    body.style.overflow = "hidden"; // Empêche le défilement vertical
    overlay.style.display = "block";
  } else {
    body.style.overflow = "auto"; // Réactive le défilement vertical
    overlay.style.display = "none";
  }
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("mobile-menu");
  body.style.overflow = "auto"; // Réactive le défilement vertical
  overlay.style.display = "none";
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "UL" || event.target.tagName === "LI") {
    navLinks.classList.remove("mobile-menu");
    body.style.overflow = "auto"; // Réactive le défilement vertical
    overlay.style.display = "none";
  }
});
