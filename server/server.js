var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var generateRoute = require('./routes/calculate');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));


console.log('starting up the server');



