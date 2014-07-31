var express = require('express');
var quotes = require('./quotes.json').quotes;

var app = express();

app.get('/', function(req, res) {

  var crazyness = rand(1, 100);

  if (crazyness >= 90 && crazyness <= 95) {
    return res.json([]);
  } else if (crazyness > 95) {
    return res.status(500).end('Troppo vino');
  }

  var n = rand(0, quotes.length - 1);
  var r = [];

  for (var i = 0; i < n; i++) {
    var q = quotes[rand(0, quotes.length -1)];
    if (r.indexOf(q) === -1) r.push(q);
  }

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
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