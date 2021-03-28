const express = require('express');
const router = express.Router()
let FoodList = require('../models/food.model.js')

router.post('/', async (req, res) => {
	const {item, expiry} = req.body;
	if (!item || !expiry) {
		return res.status(400).json({msg: 'Please input in both boxes'})
	}

	const doc = await FoodList.findOneAndUpdate(
		{
			uid: req.uid
		},
		{
			$addToSet: {
				foodItems: {item, expiry}
			}
		},
		{new: true}
	)



	if (!doc) {
		const newFoodList = new FoodList({
			uid: req.uid,
			foodItems: [{item, expiry}]
		})
		newFoodList.save()
	}
	res.json({doc})
});


router.get('/', async (req, res) => {
	if (!req.uid) res.json({msg: 'Not Authenticated'})

	const doc = await FoodList.findOne({uid: req.uid})
	res.json({doc})
})


module.exports = router
