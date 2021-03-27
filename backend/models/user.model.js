
const mongoose = require('mongoose');

//schema for user info
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, min: 8, required : true} 
})

const User = mongoose.model('User',userSchema);

module.exports = User;