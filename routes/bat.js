var express = require('express');
const bat_controlers= require('../controllers/bat');
var router = express.Router();
/* GET bottle */

router.get('/', bat_controlers.bat_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bat', { title: 'Search Results Bat' });
});

module.exports = router;
