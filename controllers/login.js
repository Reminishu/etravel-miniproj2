require('../model/login')
const mongoose = require('mongoose')
const getUser1 = mongoose.model('login')

const getUser = {
    getL(req, res, next)  {
    res.render('login', {title: 'Login'});
},
    getS(req, res, next) {
    res.render('signup', {title: "Sign up"});
},
    postP(req, res, next) {
        console.log(req.body);

        const newuser = new getUser1({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname:  req.body.lastname,
            email: req.body.email
        });

    newuser.save(function(err, savedUser) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        else{
            res.render('success', {title: 'Sign up'})
        }
    })
},
    postL(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;

        getUser1.findOne({username: username, password: password}, function(err, user){
            if(err)
                console.log(err);
                // return res.status(500).send();
                res.redirect('/');
                res.render('/', {title: 'Home'});
            if(!user)
                console.log("User not found!!")

            console.log("Logged in successful");
        })

}
};

module.exports = getUser;