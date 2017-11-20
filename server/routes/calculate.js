var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var mathstuff = require("../modules/mathstuff.js")
var port = 7000;

app.use(express.static('server/public'))

app.use(bodyParser.urlencoded({extended : true}))

mathResult = [];

app.post('/calculate', mathstuff)

app.listen(port, function () {
    console.log('running on port ' , port)})

    module.exports = router;
    