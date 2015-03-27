var express = require('express'),
    bodyParser = require('body-parser'),
    ws = require('./websockets');

var app = express();

app.use(bodyParser.json());
app.use(require('./auth'));
app.use(require('./app/controllers/posts'));
app.use(require('./app/controllers/static'));
app.use(require('./app/controllers/sessions'));
app.use(require('./app/controllers/user'));
app.use(express.static('./public/'));

var server = app.listen(3000, function(){
    console.log('Server is listening on port ', 3000);
});

ws.connect(server);

module.exports = app;