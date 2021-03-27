const express = require('express')
const dotenv = require("dotenv");
const cors = require('cors')
const mongoose = require('mongoose');


const app = express()
const port = process.env.PORT || 5000;



dotenv.config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(cors({origin: 'http://localhost:3000'}));


app.use(express.json());
app.use('/api/user', require('./routes/users_route'));


app.listen(port, () => console.log("listening on port " + port))
