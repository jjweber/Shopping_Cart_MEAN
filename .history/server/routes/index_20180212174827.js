
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');