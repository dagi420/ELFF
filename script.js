//hamburgur section start ..............................................


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
//end..........................................................


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav a');




  const sections = document.querySelectorAll('section');
  const scrollBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 100) {
          scrollBtn.classList.add('show');
      } else {
          scrollBtn.classList.remove('show');
      }

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;

          if (pageYOffset >= (sectionTop - windowHeight / 2) && pageYOffset < (sectionTop + sectionHeight - windowHeight / 2)) {
              document.querySelector('.nav a[href*=' + section.id + ']').classList.add('active');
          } else {
              document.querySelector('.nav a[href*=' + section.id + ']').classList.remove('active');
          }
      });
  });

  scrollBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});