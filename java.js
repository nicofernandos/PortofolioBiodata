document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda telah dikirim.");
  this.reset();
});

// Smooth scroll untuk navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animasi progress bars saat scroll
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideInUp 0.8s ease";
    }
  });
}, observerOptions);

document.querySelectorAll(".portfolio-card").forEach((card) => {
  observer.observe(card);
});

document.querySelectorAll(".exp-card").forEach((card) => {
  observer.observe(card);
});
