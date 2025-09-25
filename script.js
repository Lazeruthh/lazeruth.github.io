// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// theme toggle (dark = default)
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("prefersLight", document.body.classList.contains("light") ? "1" : "0");
});
if (localStorage.getItem("prefersLight") === "1") {
  document.body.classList.add("light");
}

// demo “no-backend” contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  alert(`Thanks, ${data.name}! I’ll get back to you at ${data.email}.`);
  e.target.reset();
});
