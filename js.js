// Smooth scroll for "Explore Now" button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form behavior
const form = document.getElementById("contactForm");
const responseText = document.getElementById("formResponse");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  responseText.textContent = `Thanks, ${name}! Your message has been received. We'll get back to you soon.`;
  form.reset();
});
