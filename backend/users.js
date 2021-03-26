require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
);

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, min: 8, required : true} 
})

const User = mongoose.model('User',userSchema);

exports.UserModel = User;