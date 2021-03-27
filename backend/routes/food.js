const express = require('express');
const axios = require('axios');
const router = express.Router()
let Food = require('../models/food.model.js')

//adds food to fridge
router.post('/add', (req,res) => {
    const{item} = req.body;
    
});
