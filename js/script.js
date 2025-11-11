// --- Video Swiper ---
const videoSwiper = new Swiper('.video-swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.videos .swiper-button-next',
    prevEl: '.videos .swiper-button-prev',
  },
});

// --- Destination Swiper ---
const destinationSwiper = new Swiper('.destination-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.destinations .swiper-button-next',
    prevEl: '.destinations .swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    480: { slidesPerView: 1 },
  },
});
