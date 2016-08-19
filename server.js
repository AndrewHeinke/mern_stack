var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3333;

app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.render('/public/index.html');
});

app.listen(port);
console.log('The magic happens on port ' + port);
