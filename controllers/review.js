require('../model/review')
const mongoose = require('mongoose')
const review = mongoose.model('review')

const getReview = {
    getP(req, res, next)  {
        res.render('review', {title: 'Review'});
},
    postP(req, res, next) {
        console.log(req.body);

        const newreview = new review({
            message: req.body.message,
            rating: req.body.rating,
            name: req.body.name
        });

    newreview.save(function (transactionoutput) {
console.log(transactionoutput);
    });

    res.redirect('/success_response');
},
    getR(req, res, next)    {
        res.render('success_response', {title: 'Thank you!'});
    }
};

module.exports = getReview;
