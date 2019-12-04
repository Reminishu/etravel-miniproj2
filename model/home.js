const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    source: {
        type:String,
        required:true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('flight',flightSchema);