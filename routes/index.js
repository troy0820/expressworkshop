var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Vagrant Box',
  						name: 'Troy\'s Vagrant Box' });
});

module.exports = router;
