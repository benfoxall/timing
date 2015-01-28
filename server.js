var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/now', function(req, res){
  res.end(''+Date.now());
});

var server = app.listen(port, function () {
  console.log('Server running on %d', server.address().port);
});