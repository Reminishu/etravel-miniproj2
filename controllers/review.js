require('../model/review')
const mongoose = require('mongoose')
const review = mongoose.model('review')

const getReview = {
    getP(req, res, next)  {
    review.find({}, function(err, posts){
        res.render('review', {title: 'Review', posts: posts});
    })
            
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
    res.redirect('/review')
    // res.redirect('/success_response');
},
    getR(req, res, next)    {
        // res.render('success_response', {title: 'Thank you!'});
        res.render('review')
    }
};

module.exports = getReview;
