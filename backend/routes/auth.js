const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
let User = require('../models/user.model.js')


router.post('/login', (req, res) => {
	if (req.uid) return res.json({msg: 'Already logged in'})

	const {email, password} = req.body
	if (!email || !password) return res.status(400).json({msg: 'Please correctly answer all fields'})

	User.findOne({email}, (err, user) => {
		if (err) throw err
		if (!user) return res.status(400).json({msg: 'User with that email does not exist.'})
		bcrypt.compare(password, user.password)
			.then(match => {
				if (!match) return res.status(400).json({msg: 'Invalid Credentials'})

				jwt.sign({uid: user._id}, 'secretkey', (err, token) => {
					if (err) return res.sendStatus(403)
					res.json({token, msg: 'Successfully logged in'})
				})
			})
	})
})


//router.post('/logout',(req,res)=>{

//})


module.exports = router
