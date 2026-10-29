// Skills-carrousel met de externe plug-in Swiper (https://swiperjs.com)
// Minstens 3 logo's zijn tegelijk zichtbaar.
if (typeof Swiper !== 'undefined') {
  const beweging = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  new Swiper('.skills-swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: beweging ? false : {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}
