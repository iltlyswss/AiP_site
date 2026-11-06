var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var berrySchema = new Schema({
    title: String, nick: {
        type: String,
        unique: true,
        required: true
    },
    picture: String,
    desc: String,
    created: {
        type: Date,
        default: Date.now,
    }

});

module.exports.Berry = mongoose.model("Berry", berrySchema);
