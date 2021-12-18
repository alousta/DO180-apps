var createError = require('http-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Estamos en los cabos .....Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

