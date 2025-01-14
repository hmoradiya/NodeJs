const express = require('express');
const router = express.Router();    

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

    if(error.length > 0){
        res.render('register', {
            error,
            name,
            email,
            password,
            password2
        });
    }else{
        res.send("Passed");
    }
});

module.exports = router;