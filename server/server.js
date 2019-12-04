const express = require('express')
const mongoose = require('mongoose')
const app = express()

const PORT = 3000

mongoose.Promise = global.Promise;

// connect to mongoose
mongoose.connect('mongodb+srv://admin:admin@milliontest-rwxll.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(() => console.log('Connection to database established')).catch(error => console.log(error));
//Use this function to connect to milliongenie database
/*mongoose.connect('mongodb://10.9.0.1:' + process.env.MONGO_PORT + '/' + process.env.MONDO_DB_NAME, { useNewUrlParser: true })
.then(() => console.log('Connection to database established')).catch(error => console.log(error));*/


