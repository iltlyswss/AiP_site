const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const Berry = mongoose.model('Berry', { name: String });


const berry = new Berry({ name: 'Вишня' });
berry.save().then(() => console.log('Ягода добавлена'));
