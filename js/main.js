const slideContainer = document.getElementById('slideContainer');
const slides = document.querySelectorAll('.slide');
let current = 0;

function moveSlides() {
  current = (current + 1) % slides.length;
  const offset = current * -100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(moveSlides, 5000);

