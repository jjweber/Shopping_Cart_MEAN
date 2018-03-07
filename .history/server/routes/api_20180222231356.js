const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');
const Cart = require('../models/cart');
const CartItem = require('../models/cart-Item');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


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

    console.log(req.body.username);

    //const username = req.body.username;
    //const password = req.body.password;

    User.getUserByUsername(req.body.username, (err, user) => {
    if(err) throw err;

    console.log('User: ', user.username);

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
    console.log('Get request for all of the products in db');
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
router.get('/product/:id', function(req, res) {
    console.log('Get request for one product');
    Product.findById(req.params.id)
    .exec (function(err, product) {
        if(err) {
            res.send('Error retrieving product');
        } else {
            res.json(product);
        }
    });
});

/****************************/
/* POST Save Product Route. */
/****************************/
router.post('/product-save', function(req, res) {
    console.log('Post a product');

    const newProduct = new Product({
        imagePath: req.body.imagePath,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });

    newProduct.save(function(err, insertedProduct) {
        if(err) {
        console.log('Error adding the product!');
        } else {
        //res.json(insertedProduct);
        res.redirect(req.baseUrl + '/vendors');
        }
    });
});

// DELETE endpoint for deleting food
app.delete('/remove/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    foods = foods.filter(x => x.id != id);
    res.send(f);
});

/******************************/
/* POST Update Student Route. */
/******************************/
router.post('/update-product/:id', function(req, res, next) {
    console.log(req.params._id);
    var productId = req.params._id;
    console.log('The product to be updated is: ', productId);
    Product.findById(productId)
    .exec(function(err, product) {
        if(err) {
          console.log('Error updating the product');
        } else {
          product.imagePath = req.body.imagePath;
          product.title = req.body.title;
          product.description = req.body.description;
          product.price = req.body.price;
          product.save(function(err, updatedProduct) {
            if(err) {
              console.log('Error updating product');
            } else {
              res.redirect(req.baseUrl + '/vendors');
            }
          });
          console.log(req.body.title, req.body.price);
        }
        console.log(product);
    });
  });

/*******************************/
/* Get all Item in cart Route. */
/*******************************/
router.get('/cartItems', function(req, res, next) {
    console.log('Get request for all of the cart-items in db');
    CartItem.find({})
    .exec(function(err, cartitems) {
        if(err) {
        console.log('Error retrieving cart items');
        } else {
        res.json(cartitems);
        }
    });

});

/*********************************/
/* POST Save Item to cart Route. */
/*********************************/
router.post('/saveToCart', function(req, res) {
    console.log('Post a item to cart');

    const newCartItem = new CartItem();
    newCartItem.imagePath = req.body.imagePath,
    newCartItem.title = req.body.title,
    newCartItem.description = req.body.description,
    newCartItem.price = req.body.price
    newCartItem.save(function(err, insertedItem) {
        if(err) {
          console.log('Error saving item to cart');
        } else {
          res.json(insertedItem);
        }
  });
});



router.get('/logout', function(req, res) {
    req.logout();
    res.send('Logging out');
    res.redirect('/signin');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;