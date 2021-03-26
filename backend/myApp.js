var express = require('express');
var app = express();
const router = express.Router()
var bodyParser = require('body-parser');
const path = require('path');
var User = require('./users.js'); 

const port = 3000;

app.listen(port, () => console.log("listening on port" + port))

//creates user
app.post('/api/user', (req,res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        return res.status(400).json({msg: 'Please input in all boxes'})
    }
    const newUser = new User({name,email,password})
    bcrypt.getSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save((err, user) => {
                if (err) return res.json({err})
                req.session.userId = user.id
            })
        })
    })
});

//reads user credentials
app.get('/api/user', (req,res) => {
    res.json({name : req.body.name, email : req.body.email, password : req.body.password})
});

//updates user
app.put('/api/user', (req,res) => {
    
});

//deletes user
app.delete('/api/user', (req,res) => {

});