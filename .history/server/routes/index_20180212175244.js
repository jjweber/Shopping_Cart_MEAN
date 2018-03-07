const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

/* Get home page */
router.get('/home', function())