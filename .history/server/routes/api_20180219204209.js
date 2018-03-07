const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');
const Cart = require('../models/cart');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const csurf = require('csurf');
const csurfProtection = csurf();

router.use(csurfProtection);

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/user/signup', csrfProtection, function(req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/add-to-cart/:_id', function(req, res, next) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })
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
    });

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