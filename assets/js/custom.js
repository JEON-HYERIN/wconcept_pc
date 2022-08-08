$(function(){
  const visualSwiper = new Swiper('.sc-visual .swiper', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.sc-visual .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.sc-visual .btn-prev',
      prevEl: '.sc-visual .btn-next',
    },
  });
  const whatsnewSwiper = new Swiper('.sc-whatsnew .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    navigation: {
      nextEl: '.sc-whatsnew .btn-prev',
      prevEl: '.sc-whatsnew .btn-next',
    },
    slidesPerView: 'auto',
  });
});