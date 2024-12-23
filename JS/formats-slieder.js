//JS код для слайдера картинок
const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 20,

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
      },
      // when window width is >= 1280px
      1280: {
         slidesPerView: 3,
      },
   },

   // If we need pagination
   pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active', // Добавляет активный класс для точек
   },

   // Navigation arrows
   navigation: {
      nextEl: '.carousel-button.next',
      prevEl: '.swiper-button.prev',
   },
});