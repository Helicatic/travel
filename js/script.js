let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide_mask');
  setTimeout(() => {
    mask.remove();
  }, 600)
});


// SLIDER 

const slider = document.querySelector('.testimonials__slider'),
      sliderWrapper = slider.querySelector('.testimonials__slider-wrapper'),
      slides = slider.querySelectorAll('.testimonials__slide'),
      slideNext = slider.querySelector('.testimonials__img-toggler--right'),
      slidePrev = slider.querySelector('.testimonials__img-toggler--left'),
      width = window.getComputedStyle(slider).width;

let sliderCounter = 1;
let offset = 0;

function deleteNotDigits(str) {
  return +str.replace(/\D/g, '');
}

// slider.style.width = '385px';

if (sliderCounter === 1) {
  slidePrev.disabled = 'true';
} 

slideNext.addEventListener('click', () => {

  if (offset == deleteNotDigits(width) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += deleteNotDigits(width);
  }

  sliderWrapper.style.transform = `translateX(-${offset}px)`;
  sliderCounter++;
  if (sliderCounter == slides.length) {
    slideNext.disabled = 'true';
    slidePrev.disabled = '';
  } else {
    slideNext.disabled = '';
    slidePrev.disabled = '';
  }
console.log(sliderCounter);

});

slidePrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = sliderCounter * (slides.length - 1);
  } else {
    offset -= deleteNotDigits(width);
  }
  sliderWrapper.style.transform = `translateX(-${offset}px)`;

  sliderCounter--;
  
  if (sliderCounter == 1) {
    slideNext.disabled = '';
    slidePrev.disabled = 'true';
  } else {
    slideNext.disabled = '';
    slidePrev.disabled = '';
  }  
});

