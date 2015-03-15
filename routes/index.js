var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var number = Math.floor((Math.random()*100)+1);
  res.render('index', { title: 'Vagrant Box',
  			name: 'Troy\'s Vagrant Box', 
			number:number });
});

router.post('/', function(req, res) {
  var number = Math.floor((Math.random() * 50) + 1 );
  res.render('index', { title: 'New title',
			name: 'New Name',
			number: number })
});

module.exports = router;
