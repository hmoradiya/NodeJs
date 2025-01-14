const express = require('express');
const router = express.Router();  
const bcrypt = require('bcryptjs');  
const passport = require('passport');

//user model 
const User = require('../models/User');

//Login
router.get('/login', (req, res) => {
    res.render('login');
});

//Register
router.get('/register', (req, res) => {
    res.render('register');
});

//Registe Handler
router.post('/register', (req, res) => {
    const { name, email, password, password2} = req.body;
    
    let error = [];

    //check required
    if(!name || !email || !password || !password2){
        error.push({msg: 'Please fill in all fields'});
    }
    
    //check password match 
    if(password !== password2){
        error.push({msg: 'Passwords do not match'});
    }

    //check password length
    if(password.length < 6){
        error.push({msg: 'Password must be at least 6 characters long'});
    }   
    if (error.length > 0) {
        res.render('register', {
          error,
          name,
          email,
          password,
          password2
        });
      } else {
        User.findOne({ email: email }).then(user => {
          if (user) {
            error.push({ msg: 'Email already exists' });
            res.render('register', {
              error,
              name,
              email,
              password,
              password2
            });
          } else {
            const newUser = new User({
              name,
              email,
              password
            });

            //hash password
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                 .save()
                 .then(user => {
                    req.flash(
                     'success_msg',
                      'You are now registered and can log in!'
                    );
                    res.redirect('/users/login');
                  })
                 .catch(err => console.log(err));
              });
            });

          }
        });
      }
   
});

//login handler
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
});

//logout

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
        return next(err);
    }
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});
  
});

module.exports = router;