var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/strawberry', function (req, res, next) {
  res.send("<h1>Клубника</h1>");
});

router.get('/cherry', function (req, res, next) {
  res.send("<h1>Вишня</h1>");
});

router.get('/blueberry', function (req, res, next) {
  res.send("<h1>Голубика</h1>");
});

module.exports = router;
