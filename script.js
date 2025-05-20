document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow");
  if (arrow) {
    arrow.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector("#menu");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Reveal elements on scroll
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 }
 });
}, {
 threshold: 0.1
});

document.querySelectorAll('.menu-card, .about-image img, .owner-photo').forEach(el => {
 observer.observe(el);
});
