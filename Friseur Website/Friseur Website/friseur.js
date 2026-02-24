const hamburgerButton = document.querySelector('.js-hamburger-button');
const closeButton = document.querySelector('.js-close-button');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.js-logo');
const overlay = document.querySelector('.js-overlay');
const navLinks = document.querySelectorAll('.nav a')

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      hamburgerButton.style.display = 'block';
      logo.style.display = 'block';
  })
})
  

hamburgerButton.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  hamburgerButton.style.display = 'none';
  logo.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  hamburgerButton.style.display = 'block';
  logo.style.display = 'block';
});

// Optional: also close when clicking outside
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  hamburgerButton.style.display = 'block';
  logo.style.display = 'block';
});
