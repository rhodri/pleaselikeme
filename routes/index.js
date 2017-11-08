var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/choices', function(req, res, next) {
  res.send(200, req.body);
});

module.exports = router;
