//Schema for the user id / food list pair
const mongoose = require('mongoose');

//schema for user info
const Schema = mongoose.Schema;
const userlistSchema = new Schema({
    id : {type : String, required : true},
    foods : [{ type : String}]
})

const Userlist = mongoose.model('Userlist',userlistSchema);

module.exports = Userlist;