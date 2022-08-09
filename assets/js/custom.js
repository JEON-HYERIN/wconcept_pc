$(function(){
  const visualSwiper = new Swiper('.sc-visual .swiper', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.sc-visual .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-visual .btn-prev',
      nextEl: '.sc-visual .btn-next',
    },
  });
  const whatsnewSwiper = new Swiper('.sc-whatsnew .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    navigation: {
      prevEl: '.sc-whatsnew .btn-prev',
      nextEl: '.sc-whatsnew .btn-next',
    },
    slidesPerView: 'auto',
  });
  const makeityoursSwiper = new Swiper('.sc-makeityours .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    navigation: {
      prevEl: '.sc-makeityours .btn-prev',
      nextEl: '.sc-makeityours .btn-next',
    },
    slidesPerView: 'auto',
  });
  const exclusiveSwiper = new Swiper('.sc-exclusive .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    navigation: {
      prevEl: '.sc-exclusive .btn-prev',
      nextEl: '.sc-exclusive .btn-next',
    },
    slidesPerView: 'auto',
    centeredSlides: true
  });
});