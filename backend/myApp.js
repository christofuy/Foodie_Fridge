const dotenv = require("dotenv");
dotenv.config();
var express = require('express');
var app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true});

//creates User schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, min: 8, required : true} 
})

const User = mongoose.model('User',userSchema);

const port = 3000;

app.listen(port, () => console.log("listening on port " + port))

//creates user
router.post('/api/user', (req,res) => {
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

//reads user credentials and renders it
router.get('/api/user', (req,res) => {
    res.json({'user' : req.params.id})
});

//updates user
router.put('/api/user/:id', (req,res) => {
    var id = req.params.id;
    User.findOne({_id : id}, function(err, foundObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if(!foundObject) {
                res.status(404).send();
            } else {
                if(req.body.name) {
                    foundObject.name = req.body.name;
                }
                if(req.body.email) {
                    foundObject.email = req.body.email;
                }
                if(req.body.password) {
                    foundObject.password = req.body.password;
                }

                foundObject.save(function(err, updatedObject) {
                    if(err) {
                        console.log(err);
                        res.status(500).send();
                    }else{
                        res.send(updatedObject);
                    }
                });
            }
        }
    });
});

//deletes user
router.delete('/api/user/:id', (req,res) => {
    User.findByIdandRemove(req.params.id).exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
});

module.exports = router