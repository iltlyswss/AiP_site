var express = require('express');
var router = express.Router();
var Berry = require('../models/berry').Berry;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с berries');
});

router.get("/:nick", async function(req, res, next) {
   var berries = await Berry.find({nick: req.params.nick});
   console.log(berries);
   if(!berries.length) return next(new Error("Нет такой ягоды в списке"));
       var berry = berries[0];
       res.render('berry', {
           title: berry.title,
           picture: berry.picture,
           desc: berry.desc
       });
});

module.exports = router;
