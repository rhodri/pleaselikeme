define(["jquery", "slick"], function($, slick) {

  $(function(){

    var details = { choices: {}, name: null, email: null };
    var swiper = $('.swiper');

    swiper.slick({
      arrows: false,
      waitForAnimate: false // to allow slickGoTo on swipe
    }).on('swipe', function (e, slick, direction) {
      
      console.log(direction);

      if (swiper.slick('slickCurrentSlide') === 0) return;
      // swiper.slick('slickGoTo', 0, true);
    });
  });
});
