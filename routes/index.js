var express = require('express');
var router = express.Router();

var db = require('../helper/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/choices', function(req, res, next) {
  var choices = JSON.parse(req.body.choices);
  db.record(req.body.email, choices)
    .then(function (result) { res.redirect('/'); });
});

module.exports = router;
