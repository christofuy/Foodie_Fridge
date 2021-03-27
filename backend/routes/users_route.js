const express = require('express')
const router = express.Router()
const bcrpt = require('bcrypt')
let User = require('../models/users.js')

//creates user
router.post('/create', (req,res) => {
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

//deletes user
router.delete('/:id', (req,res) => {
    User.findByIdandRemove(req.params.id).exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
});

//updates user
router.put('/:id', (req,res) => {
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

//reads user credentials
router.get('/', (req,res) => {
    res.send(req.params.id);
});

module.exports = router