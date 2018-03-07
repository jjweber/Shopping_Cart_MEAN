const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../');

router.get('/', (req, res) => {
    res.send('api works');
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

module.exports = router;