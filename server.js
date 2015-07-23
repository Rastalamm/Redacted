var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var slangAway = require('./lib/no-slang');


app.set('view engine', 'jade');
app.set('views', './views');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(slangAway);


app.get('/', function(req, res) {
  res.render('form')
});

app.post('/', function(req, res) {

  console.log(req);

  res.render('form', req.body)

});



var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});