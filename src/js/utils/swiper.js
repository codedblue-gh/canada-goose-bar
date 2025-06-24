window.addEventListener('load', function () {
  if (document.querySelector('.articles__slider')) {
    new Swiper('.articles__slider', {
      loop: true,
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: '.articles .controls__item_prev',
        nextEl: '.articles .controls__item_next',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (document.querySelector('.about__slider')) {
    new Swiper('.about__slider', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  }
});
