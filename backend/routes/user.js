const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let User = require('../models/user.model.js')

//creates user
router.post('/', (req, res) => {
	if (req.uid) return res.json({msg: 'Already logged in'})
	const {name, email, password} = req.body
	if (!name || !email || !password) {
		return res.status(400).json({msg: 'Please input in all boxes'})
	}
	const newUser = new User({name, email, password})
	bcrypt.genSalt(10, (err, salt) => {
		if (err) throw err

		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err

			newUser.password = hash
			newUser.save((err, user) => {
				if (err) return res.json({err})
				jwt.sign({uid: user._id}, 'secretkey', (err, token) => {
					if (err) return res.sendStatus(403)
					res.json({token, msg: 'Successfully created user'})
				})
			})
		})
	})
});



//deletes user
router.delete('/:id', (req, res) => {
	User.findByIdAndDelete(req.params.id).exec()
		.then(doc => {
			if (!doc) {return res.status(404).end();}
			return res.status(204).end();
		})
		.catch(err => next(err));
});



//updates user
router.put('/:id', (req, res) => {
	var id = req.params.id;
	User.findOne({_id: id}, function (err, foundObject) {
		if (err) {
			console.log(err);
			res.status(500).send();
		} else {
			if (!foundObject) {
				res.status(404).send();
			} else {
				if (req.body.name) {
					foundObject.name = req.body.name;
				}
				if (req.body.email) {
					foundObject.email = req.body.email;
				}
				if (req.body.password) {
					foundObject.password = req.body.password;
				}

				foundObject.save(function (err, updatedObject) {
					if (err) {
						console.log(err);
						res.status(500).send();
					} else {
						res.send(updatedObject);
					}
				});
			}
		}
	});
});



//reads user credentials
//router.get('/', (req, res) => {
//res.send(req.params.id);
//});

module.exports = router
