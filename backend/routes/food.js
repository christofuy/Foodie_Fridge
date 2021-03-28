const express = require('express');
const axios = require('axios');
const router = express.Router()
let Food = require('../models/food.model.js')
let User = require('../models/user.model.js')
let Date = require('../models/date.model.js')

//adds food to fridge
router.post('/add', (req,res) => {
    const{item, date} = req.body;
    if (!item || !date) {
        return res.status(400).json({msg: 'Please input in both boxes'})
    }
    const newItems = new Food({item})
    newItems.save()
    .then(item => {
        res.send('item saved successfully');
    })
    .catch(err => {
        res.status(400).send('item not saved successfully');
    });
    Food.collection.insertOne(newItems, (err,docs) => {
        if (err){
            return console.error(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });
    const newDates = new Date({date});
    newDates.save()
    .then(item => {
        res.send('item saved successfully');
    })
    .catch(err => {
        res.status(400).send('item not saved successfully');
    });
    Date.collection.insertOne(newItems, (err,docs) => {
        if (err){
            return console.error(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });
});

module.exports = router