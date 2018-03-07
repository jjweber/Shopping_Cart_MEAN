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


/***************/
/* User Routes */
/***************/


/***************/
/* Signup User */

router.get('/user/signup', function(req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

/***************/
/* Signin User */
router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

/***********************/
/* Register an account */
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

/*********************/
/* Authenticate user */
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

/****************/
/* Logout Route */
router.get('/logout', function(req, res) {
    req.logout();
    res.send('Logging out');
    res.redirect('/signin');
});


/******************/
/* Product Routes */
/******************/


/********************/
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

/*************************/
/* Get one product by id */
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

/******************************/
/* POST Update Product Route. */
router.put('/update-product/:id', function(req, res) {
    let product = req.body;
    const id = product._id;

    delete product._id;

    if (id) {
      Product.update({_id: id}, product, {upsert: true}, function (err, product) {
        if(err) console.log('Err: ', err);
        return res.json(product);
      });
    }
});

/******************************************/
/* DELETE endpoint for deleting a Product */
router.delete('/product/:id', function(req, res) {
    console.log('Deleting product with id of: ', req.params.id);
    Product.remove({'_id': req.params.id}, (result) => {
      res.json(result);
    });
});



/********************/
/* Cart Item Routes */
/********************/


/*******************************/
/* Get all Item in cart Route. */
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

/******************************************************/
/* DELETE endpoint for deleting an Item form the Cart */
router.delete('/item/:id', function(req, res) {
    console.log('Removing item from cart with id of: ', req.params.id);
    CartItem.remove({'_id': req.params.id}, (result) => {
      res.json(result);
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


/*******************/
/* Checkout Routes */
/*******************/
router.post('/checkout', function(req, res, next) {

    const checkoutInfo = req.body;
    //const amount = checkoutInfo[0];
    //console.log(amount);

    const cart = new Cart(req.session.cart);

    const stripe = require("stripe")(
        "sk_test_0rxtXPEqD5ohU6IMMG3HICdr"
    );

    let name = checkoutInfo[1];
    // let amount = checkoutInfo[0];
    let new_variable = input(amount, informat);
    let source = "tok_amex";
    console.log("Name: ", name);
    console.log("Amount: ", new_variable);
    console.log("The source: ", source);

    stripe.charges.create({
        amount:new_variable,
        currency: "usd",
        source: source, // obtained with Stripe.js
        description: "Charge for "+ name +"@example.com"
      }, function(err, charge) {
        // asynchronously called
      });

});



module.exports = router;
