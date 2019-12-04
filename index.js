const bodyParser= require('body-parser')
const express = require('express');
const router = require('./routes/routes');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const server = require('./server/server');

app.use(bodyParser.urlencoded({extended: true}));




app.use(express.static(__dirname + '/public'));

app.set('views', 'views');
app.set('view engine', 'ejs');


app.use(router);

app.listen(3000);