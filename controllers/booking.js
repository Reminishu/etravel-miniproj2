const getBooking = {
    getb1(req, res, next)  {
    res.render('booking1', {title: 'Confirm!'});
},
    getb2(req, res, next)    {
    res.render('booking2', {title: 'Confirm!'});
},
    getb3(req, res, next)   {
    res.render('booking3', {title:'Confirm!'});
},
    getconfirm(req, res, next){
    res.render("paymentconfirm", {title: 'Success'});
    }
};
module.exports = getBooking;