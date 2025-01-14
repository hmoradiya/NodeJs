const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//load user models
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        //match user by email
            User.findOne({email: email}).then(user => {
                if(!user) {
                    return done(null, false, {message: 'No user found with that email'});
                }
                
                //match password
                bcrypt.compare(password, user.password).then(isMatch => {
                    if(isMatch) {
                        return done(null, user);
                    } else { 
                        return done(null, false, {message: 'Incorrect password'});
                    }
                });
            }).catch((err) => console.log(err)) ;
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
};