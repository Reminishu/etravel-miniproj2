const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('login',userSchema);