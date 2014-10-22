var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var wines = require('./routes/wines'); //routes are defined here
var app = express(); //Create the Express app


//connect to database
//Ideally you will obtain DB details from a config file

var dbName = 'WineDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', wines); //This is the route middleware
 
module.exports = app;