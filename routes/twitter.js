var express = require('express');
var router = express.Router();
var _ = require('lodash');
var util = require('util'),
    twitter = require('twitter');

var config = require('../config.json');
var twit = new twitter(config);

/* GET users listing. */
router.get('/', function(req, res) {
  //
  twit.search('@stanzheng', function(data) {
    console.log(util.inspect(data));
    res.send(data);
  });
  //
});


/* GET home page. */
router.get('/troy', function(req, res) {
  res.send("<h1>TROY</h1>");
  //res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/:keyword', function(req, res) {
  var tweets = [];
  twit.search('#'  + req.params.keyword, function(data) {
    //console.log(util.inspect(data));
    //use tweets info
    _.each(data.statuses, function(tweet){
      tweets.push(tweet.user.screen_name + " said " + tweet.text);
    });
    console.log(data);
    //pass my data
    res.render('twitter', { tweets: tweets, author: "@stanzheng" });
    res.end();
  });
});

module.exports = router;
