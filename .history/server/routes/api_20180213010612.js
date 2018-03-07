const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const Video = require('../models/product');

console.log('apijs here!!');

router.get('/', (req, res) => {
    res.send('api works');
    console.log('api works');
});

/* Get all products */
router.get('/products', function(req, res, next) {
    console.log('Get request for all products');
    Product.find({})
    .exec(function(err, products) {
        if(err) {
        console.log('Error retrieving products');
        } else {
        res.json(products);
        }
    })

});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;