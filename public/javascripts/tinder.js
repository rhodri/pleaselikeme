$(document).ready(function(){

  $('.swiper').slick({
    arrows: false
  }).on('swipe', function (e, slick, direction) {
    console.log($('.swiper').slick('slickCurrentSlide'));
    console.log(direction);
  });
});
