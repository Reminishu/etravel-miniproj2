const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightPost = new Schema({
    idn:{
        type: String,
        require: true
    },
    name: {
        type:String,
        required:true
    },
    classn: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    departuretime: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('flightPost',flightPost);