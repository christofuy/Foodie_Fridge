const express = require('express');
const router = express.Router()
let FoodList = require('../models/food.model.js')
let Expiration = require('../models/expiration.model.js')

router.post('/', (req,res) => {
    const dateNow = Date.now()
    const{food, expiration} = req.body
    const dateExpire = Date.parse(expiration);
    if (dateNow >= dateExpire){
        let isExpired = true
    } else {
        let isExpired = false
    }
    const newExpireList = new Expiration({
        item : food,
        expire : isExpired
    })
    newExpireList.save()

});

module.exports = router