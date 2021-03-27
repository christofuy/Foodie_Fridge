const dotenv = require("dotenv");
dotenv.config();
var express = require('express');
var app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true});

const port = 3000;

app.listen(port, () => console.log("listening on port " + port))

router.get('/',(req,res,next)=>{
   res.send('Test'); 
});

//deletes user
router.delete('/api/user/:id', (req,res) => {
    User.findByIdandRemove(req.params.id).exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
});

module.exports = router