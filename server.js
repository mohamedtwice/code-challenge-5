// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
var posts = require('./modules/routes/posts');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', index);
app.use('/posts', posts);

// globals
var port = process.env.PORT || 3333;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
}); // end server up
