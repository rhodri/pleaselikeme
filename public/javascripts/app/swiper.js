define(["jquery", "slick", "knockout"], function ($, slick, ko) {
  
  var names = ['jimmy', 'vievenog']
  var elem, model;

  function onSwipe(e, slick, direction) {
    console.log(direction);
    // TODO: record swipe
  }

  function afterChange(updateFn) {
    return function(e, slick, slideIndex) {
      if (elem.slick('slickCurrentSlide') === 0) return;
      elem.hide();
      updateFn();
      elem.slick('slickGoTo', 0, true);
      elem.fadeIn(500);
    }
  }

  var afterIntro = afterChange(function () {
    model.intro(false);
    elem.off('afterChange', afterIntro);
    elem.on('swipe', onSwipe);
    elem.on('afterChange', afterPortrait);
  });

  var afterPortrait = afterChange(function () {
    model.idx(model.idx() + 1);
  });

  function slickElem(cssSelector) {
    var elem = $(cssSelector);
    elem.slick({
      arrows: false,
      waitForAnimate: false // to allow slickGoTo on swipe
    });
    return elem;
  }

  function createModel() {

    var self = {};

    self.intro = ko.observable(true);
    self.idx = ko.observable(0);

    self.name = ko.computed(function () {
      return names[self.idx()];
    })
    self.imgUrl = ko.computed(function () {
      return '/images/portraits/' + self.name() + '.jpg';
    });

    return self;
  }

  return {
    init: function(cssSelector) {

      model = createModel();
      ko.applyBindings(model);

      elem = slickElem(cssSelector);
      elem.on('afterChange', afterIntro);
    }
  }
});