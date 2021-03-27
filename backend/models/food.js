const mongoose = require('mongoose');

//schema for fridge items
const Schema = mongoose.Schema;
const foodSchema = 
    db.fridges.aggregate([
        { $fridge: { items : { $concatArrays:["expired","non-expired"]}}}
    ])

const Food = mogoose.model('Food',foodSchema);

module.exports = Food;