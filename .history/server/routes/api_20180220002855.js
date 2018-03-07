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


router.get('/user/signup', function(req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

//////////////////////
// User Routes
//////////////////////

// Register an account
router.post('/register', function(req, res, next) {
    console.log('Register a user');
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save(function(err, insertedUser) {
        if(err) {
            console.log('Error registering the user!');
        } else {
            res.json(insertedUser);
        }
    });
});

// Authenticate user
router.post('/authenticate', function(req, res, next) {

    console.log('Here 1');

    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;

      console.log('User: ', user);

      if (!user) {
        console.log(user);
        return res.json({success: false, msg: 'User not found'});
      } else {

        if(user.password === password) {
          const token = jwt.sign(user, 'config.secret', {
            expiresIn: 604800 // 1 week
          });

          res.json({
            success: true,
            token: 'JTW' + token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        }
        else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      }
    });
});

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

// Get one product by id
router.get('/products/:id', function(req, res) {
    console.log('Get request for one product');
    Product.findById(req.params.id)
    .exec (function(err, product) {
        if(err) {
        res.send('Error deleting product');
        } else {
        res.json(deletedProduct);
        }
    });
});


router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/signin');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;