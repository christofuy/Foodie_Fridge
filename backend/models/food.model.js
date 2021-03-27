const mongoose = require('mongoose');

//model for fridge items and expiration dates
const foodModel = 
    db.fridges.aggregate([
        { $project: { item : date}}
    ])

const Food = mogoose.model('Food',foodModel);

module.exports = Food;