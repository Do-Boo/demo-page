// 메인 슬라이드 배너
var swiper = new Swiper('.swiper-container', {
  speed: 400,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

// MD's Pick
var swiper = new Swiper('.mdPickContainer', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  pagination: '.swiper-pagination',
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


jQuery(document).ready(function () {
  var _ = jQuery;

  //메인 tabProduct
  var newCateProd = _('.newCate_prod'),
    newCateSlider = newCateProd.find('.newCateSlider').bxSlider({
      mode: 'fade',
      autoHover: true,
      pagerCustom: '#newCatePageThumb',
      auto: false,
      stopAutoOnClick: true,
      controls: false,
      onSliderLoad: function () {
        jQuery('#tabProduct ').css("visibility", "visible");
      },
      onSliderResize: function () {
        newCateSlider.reloadSlider();
      }
    });
  /*
  newCateProd.find('.slideList').on('mouseenter', function(){
      return newCateSlider.stopAuto();
  });
  newCateProd.find('.slideList').on('mouseleave', function(){
      return newCateSlider.startAuto();
  });
  */


});

