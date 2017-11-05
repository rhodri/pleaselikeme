requirejs.config({
  "baseUrl": "javascripts/lib",
  "paths": {
    "app": "../app",
    "jquery": "https://code.jquery.com/jquery-3.2.1.slim.min",
    "popper": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min",
    "bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min"
  },
  "shim" : {
    "bootstrap": ["jquery","popper"],
    "slick": ["jquery"]
  }
});

requirejs(["app/tinder"]);