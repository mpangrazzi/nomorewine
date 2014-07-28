var express = require('express');
var quotes = require('./quotes.json').quotes;

var app = express();

app.get('/', function(req, res) {
  var n = rand(0, quotes.length - 1);
  var r = [];

  for (var i = 0; i < n; i++) {
    var q = quotes[rand(0, quotes.length -1)];
    if (r.indexOf(q) === -1) r.push(q);
  }

  res.json(r);
});

app.get('*', function(req, res) {
  res.status(404).end();
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}