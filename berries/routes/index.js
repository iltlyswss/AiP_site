var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/strawberry', function (req, res, next) {
  res.render('berry', {
    title: "Клубника",
    picture: "images/strawberry.png",
    desc: "Клубника — название крупноплодных видов растений рода Земляника (Fragaria) семейства Розовые, а также их плодов."
  });
});

router.get('/cherry', function (req, res, next) {
  res.render('berry', {
    title: "Вишня",
    picture: "images/cherry.png",
    desc: "Вишня (лат. Prúnus subg. Cérasus) — подрод растений рода Слива (Prunus) семейства Розовые (Rosaceae). Распространённая плодовая культура."
  });
});

router.get('/blueberry', function (req, res, next) {
  res.render('berry', {
    title: "Голубика",
    picture: "images/blueberry.png",
    desc: "Голубика, или голубика обыкновенная (лат. Vaccínium uliginósum), — вид листопадных кустарников из рода Вакциниум семейства Вересковые. Типовой вид этого рода. Является ближайшей родственницей брусники и черники."
  });
});

module.exports = router;
