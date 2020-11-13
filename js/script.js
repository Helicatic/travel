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
      slideName = document.querySelectorAll('.testimonials__name'),
      slideInfo = document.querySelectorAll('.testimonials__text'),
      width = window.getComputedStyle(slider).width;

let sliderCounter = 1;
let offset = 0;

function deleteNotDigits(str) {
  return +str.replace(/\D/g, '');
}

slideName.forEach(name => name.style.display = 'none');
slideInfo.forEach(info => info.style.display = 'none');


slideName[(sliderCounter - 1)].style.display = '';
slideInfo[(sliderCounter - 1)].style.display = '';


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
  slideName.forEach(item => item.style.display = 'none');
  slideName[(sliderCounter - 1)].style.display = '';
  slideInfo.forEach(item => item.style.display = 'none');
  slideInfo[(sliderCounter - 1)].style.display = '';


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
  slideName.forEach(item => item.style.display = 'none');
  slideName[(sliderCounter - 1)].style.display = '';
  slideInfo.forEach(item => item.style.display = 'none');
  slideInfo[(sliderCounter - 1)].style.display = '';
  
  if (sliderCounter == 1) {
    slideNext.disabled = '';
    slidePrev.disabled = 'true';
  } else {
    slideNext.disabled = '';
    slidePrev.disabled = '';
  }  
});

