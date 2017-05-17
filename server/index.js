var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(app.get('port'), function() {
  console.log('listening on port ', app.get('port'));
});

