require('../model/home')
require('../model/flight')
const mongoose = require('mongoose')
const getFlight = mongoose.model('flight')
const Flight1 = mongoose.model('flightPost')
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

},
    getF(req, res, next)    {
        Flight1.find({}, (err, flight) => {
            res.render('listFlight', {title: 'Flight', flight: flight});
       })
      
},


    postFlight(req, res, next) {
    var name = req.body.name;
    var classn = req.body.classn;
    var fare = req.body.fare;
    var seats = req.body.seats;
    var departuretime = req.body.departuretime;
    var idn = req.body.idn;

    const flight = new  Flight1({
        idn: idn,
        name: name,
        classn: classn,
        fare: fare,
        seats: seats,
        departuretime: departuretime
    });

    flight.save(function(transactionoutput){
        console.log(transactionoutput);
    });

},
    getpflight(req, res, next){
        res.render('postFlight', {title: "DEVMODE"})
    }
};

module.exports = getHome;