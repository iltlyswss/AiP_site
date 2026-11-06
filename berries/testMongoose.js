const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Berry = require("./models/berry.js").Berry;

var berry = new Berry({
    title: "Вишня",
    nick: "cherry"
});

berry.save();