const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res) => {
    res.send('api works');
});

/* Get all products */
router.get('/products', function(req, res, next) {
    const products = Product.find();
    res.render()
});

module.exports = router;