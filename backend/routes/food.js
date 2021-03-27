const express = require('express');
const axios = require('axios');
const router = express.Router()
let Food = require('../models/food.model.js')

//adds food to fridge
router.post('/add', (req,res) => {
    const{item, date} = req.body;
    if (!items || !date) {
        return res.status(400).json({msg: 'Please input in both boxes'})
    }
    const newItems = new Food({item, date})
});
