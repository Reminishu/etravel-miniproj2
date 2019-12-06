require('../model/login')
const mongoose = require('mongoose')
const getUser1 = mongoose.model('login')

const getUser = {
    getL(req, res, next)  {
    res.locals.logio = "LOGIN";
    res.render('login', {title: 'Login'});

},
    getS(req, res, next) {
    res.render('signup', {title: "Sign up"});
},
    postP(req, res, next) {
        console.log(req.body);
        var email = req.body.email;

        const newuser = new getUser1({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname:  req.body.lastname,
            email: req.body.email
        });
    getUser1.findOne({email: email}, function(err, user){
        if(err)
            console.log(err);
        if(user)
        { 
            res.render('signup', {messages: "Username/email already exists!!", title: "Sign Up"});

        }
        else{

        newuser.save(function(err, savedUser) {
            if(err) {
                console.log(err);
                return res.status(500).send();
            }
            else{
                res.render('success', {title: 'Sign up'})
            }
        })
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
               // res.redirect('/');
               // res.render('/', {title: 'Home'});
            if(!user)
            {      
                   console.log("Check your details and try again.");
                   res.render('login', {messages: "Check your details and try again.", title: "login"});
            }
            else
            {   var firstname = user.firstname;
                console.log("Login successful!");
                res.locals.logio = "LOGOUT";
                res.render('home', {userwel: "Welcome, " + firstname, title: "Home"});
                
            }
        })

}
};

module.exports = getUser;