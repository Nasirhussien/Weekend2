var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var generateRoute = require('./routes/calculate');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));


console.log('starting up the server');



app.listen(port, function(){
    console.log('port working on', port);


app.use('/calculate', generateRoute);
});

app.post('/calculate', function (req,res) {
    
    console.log('user calc route was hit')
    
  
}) 

