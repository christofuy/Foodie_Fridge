const mongoose = require('mongoose');

//model for fridge items and expiration dates
const dateSchema = mongoose.Schema({
    date : {type : String, required : true}
});

const Date = mongoose.model('Date',dateSchema);

module.exports = Date;