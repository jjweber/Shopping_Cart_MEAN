const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/')

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

router.delete('/product/:id', function(req, res) {
    console.log('Deleting a product');
    Video.findByIdAndRemove(req.params.id, function(err, deletedProduct) {
      if(err) {
        res.send('Error deleting product');
      } else {
        res.json(deletedProduct);
      }
    });
  });

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;