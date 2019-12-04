require('../model/home')
const mongoose = require('mongoose')
const getFlight = mongoose.model('flight')

const getHome = {
    getP(req, res, next)  {
    res.render('home', {title: 'Home'});
},
    postP(req, res, next) {
        console.log(req.body);

        const newflight = new getFlight({
            source: req.body.source,
            destination: req.body.destination,
            date: req.body.date,
            class:  req.body.class
        });

    newflight.save(function (transactionoutput) {
console.log(transactionoutput);
    });

    res.redirect('/flights');
},
    getF(req, res, next)    {
        res.render('listFlight', {title: 'Flights'});
    }
};

module.exports = getHome;