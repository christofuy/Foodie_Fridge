const mongoose = require('mongoose');

const expirationSchema = mongoose.Schema({
    food : {type : String, required : true},
    isExpired : {type : Boolean, required : true}
})

const Expiration = mongoose.model('Expiration',expirationSchema);

module.exports = Expiration