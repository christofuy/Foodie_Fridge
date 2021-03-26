const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middlware
app.use(cors({origin: 'http://localhost:3000'})); //allow cors
app.use(express.json());

//const uri = process.atlas.env.ATLAS_URI;
//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
//);
//const connection = mongoose.connection;
//connection.once('open', () => {
//console.log("MongoDB database connection established successfully");
//})


//Add routes to API
app.use('/api/chat', require('./routes/requests'))

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});