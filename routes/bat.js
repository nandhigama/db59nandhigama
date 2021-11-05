var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bat', { title: 'Search Results Bat' });
});

module.exports = router;
