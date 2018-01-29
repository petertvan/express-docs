var express = require('express');
var path = require('path');
var index = require('./routes/index');
var expressHandlebars = require('express-handlebars');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({helpers: {
  toJSON : function(object) {
    return JSON.stringify(object);
  }
}}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(8085, () => console.log('express-docs app listening on localhost:8085...'));