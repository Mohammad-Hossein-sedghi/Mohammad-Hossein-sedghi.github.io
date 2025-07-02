document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out!");
  this.reset();
});