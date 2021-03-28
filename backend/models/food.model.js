const mongoose = require('mongoose');

//model for fridge items and expiration dates
const foodSchema = mongoose.Schema({
    item : {type : String, required : true}
});

const Food = mongoose.model('Food',foodSchema);

module.exports = Food;