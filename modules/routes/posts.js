var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// uses
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// connect to mongoose
mongoose.connect('localhost:27017/messageboard');

var newPosting = new mongoose.Schema({
  name: String,
  message: String
});

var posts = mongoose.model('posts', newPosting);

//GET
router.get('/', function(req, res) {
  console.log('get route hit');
  posts.find().then(function(data) {
    console.log('data');
    res.send(data);
  }); // end find
}); //end get route


//POST
router.post('/', function(req, res) {
  console.log('post route hit:', req.body);
  // req.body property names must match up to Schema
  var commentToAdd = {
    name: req.body.name,
    message: req.body.message
  };
  console.log(commentToAdd);
  commentToAdd.save();
  // res.send('Posted!');
}); //end post

module.exports = router;
