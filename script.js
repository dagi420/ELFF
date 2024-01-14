// Bouncing effect for buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseover', function() {
    this.classList.add('bounce');
  });
  button.addEventListener('animationend', function() {
    this.classList.remove('bounce');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

