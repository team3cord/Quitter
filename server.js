var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.use(require('./app/controllers/sessions'));
app.use(require('./app/controllers/user'));
app.use(express.static('./public/'));

app.listen(3000, function(){
    console.log('Server is listening on port ', 3000);
});

module.exports = app;