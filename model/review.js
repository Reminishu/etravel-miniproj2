const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('review',reviewSchema);