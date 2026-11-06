const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String });

schema.methods.adding = function () {
    console.log(this.name + " добавлена в базу");
};

const Berry = mongoose.model('Berry', schema);

const berry = new Berry({ name: 'Вишня' });
berry.save().then(() => berry.adding());
