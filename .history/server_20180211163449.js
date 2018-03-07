const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser =require('body-parser');

const routes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Passport init
app.use(passport.initialize());
app.use(passport.session());

