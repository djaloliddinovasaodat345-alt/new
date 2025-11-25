const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
   slidesPerView: 3,        
  spaceBetween: 12,  
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
