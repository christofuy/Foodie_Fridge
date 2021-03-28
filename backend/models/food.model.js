const mongoose = require('mongoose');


const Schema = mongoose.Schema
const foodSchema = new Schema({
	item: {type: String, required: true},
	expiry: {type: String, required: true}
})



const foodListSchema = new Schema({
	uid: {type: String, required: true},
	foodItems: [foodSchema]
})

const FoodList = mongoose.model('Food', foodListSchema, 'foodList');

module.exports = FoodList;
