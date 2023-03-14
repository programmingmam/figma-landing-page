
// product slider

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const productCards = document.querySelectorAll('.product-card');

let slideIndex = 0;
const slideWidth = productCards[0].offsetWidth + 40;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = productCards.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex > productCards.length - 1) {
    slideIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

// end