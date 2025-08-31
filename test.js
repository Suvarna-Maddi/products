const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
});
// Reveal animations when section comes into view
// Scroll-triggered staggered animation
// Scroll-trigger animations
// Simple parallax for product & text

// Slight hover parallax for product image
document.querySelector('.product-visual').addEventListener('mousemove', (e) => {
  const img = document.querySelector('.product-img');
  const moveX = (e.offsetX / e.target.clientWidth - 0.5) * 20;
  const moveY = (e.offsetY / e.target.clientHeight - 0.5) * 20;
  img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
});
document.querySelector('.product-visual').addEventListener('mouseleave', () => {
  document.querySelector('.product-img').style.transform = `translate(0,0) scale(1)`;
});
