define(["jquery", "slick", "knockout"], function ($, slick, ko) {
  
  var names = ['john', 'jack']
  var elem, model;

  function onSwipe(e, slick, direction) {
    console.log(direction);
    if (elem.slick('slickCurrentSlide') === 0) return;
  }

  function setupElem(cssSelector) {

    var elem = $(cssSelector);
    elem.slick({
      arrows: false,
      waitForAnimate: false // to allow slickGoTo on swipe
    }).on('swipe', onSwipe);

    return elem;
  }

  function createModel() {

    var self = {};
    self.name = ko.observable(names[0]);
    self.imgUrl = ko.computed(function () {
      return '/images/' + self.name() + '.jpg';
    });

    return self;
  }

  return {
    init: function(cssSelector) {
      elem = setupElem(cssSelector);
      model = createModel();
      ko.applyBindings(model);
    }
  }
});