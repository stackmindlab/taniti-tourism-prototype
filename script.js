// ✅ Contact form demo handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! Your message has been received. (Demo only)');
      this.reset();
    });
  }

  // ✅ Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
