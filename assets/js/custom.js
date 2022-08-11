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
  const beautypickSwiper = new Swiper('.sc-beautypick .swiper', {
    autoplay: true,
    loop: true,
    pagination: {
      el: '.sc-beautypick .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-beautypick .btn-prev',
      nextEl: '.sc-beautypick .btn-next',
    },
  });
  const wconceptTVSwiper = new Swiper('.sc-wconceptTV .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      prevEl: '.sc-wconceptTV .btn-prev',
      nextEl: '.sc-wconceptTV .btn-next',
    },
    slidesPerView: 'auto',
    centeredSlides: true
  });
  const banner2Swiper = new Swiper('.sc-banner2 .swiper', {
    // autoplay: true,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.sc-banner2 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.sc-banner2 .btn-prev',
      nextEl: '.sc-banner2 .btn-next',
    },
  });
  var designersbullet = ['FAYEWOO', 'MAISONMARAIS', 'DEAR MY DEER', 'Lemme', 'VERUTUM'];
  const designersSwiper = new Swiper('.sc-designers .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    navigation: {
      prevEl: '.sc-designers .btn-prev',
      nextEl: '.sc-designers .btn-next',
    },
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
      el: '.sc-designers .category-area',
      clickable: true,
      bulletClass: 'btn-category',
      bulletActiveClass: 'active',
      bulletElement: 'a',
      renderBullet: function (index, className) {
        return '<a href="#" class="' + className + '" role="tab">' + '<span>' + (designersbullet[index]) + '</span>' + '</a>';
      }
    },
  });
  // wdnastyle
  $('.sc-wdnastyle .btn-category').click(function(e){
    e.preventDefault();
    const dataType=$(this).data('type');

    $('.sc-wdnastyle .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.wdnastyle-list').removeClass('visible');
  });
});

