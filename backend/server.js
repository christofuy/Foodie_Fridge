const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
var express = require('express');
var app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true});

app.use(cors({origin: 'http://localhost:3000'}));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening on port " + port))

app.use(express.json());
app.use('/api/user', require('./routes/users_route'));

module.exports = router