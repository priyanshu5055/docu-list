// landing.js - DocuList Landing Page Script

document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector("#cta-button");
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  // Smooth scroll navigation
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // CTA button click
  ctaButton.addEventListener("click", () => {
    window.location.href = "/signup.html"; // Replace with your actual route
  });

  // Fade-in animation on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Dynamic year in footer
  document.querySelector("#year").textContent = new Date().getFullYear();
});
