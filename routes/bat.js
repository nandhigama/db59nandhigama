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
// GET request for one bat.
router.get('/bat/:id', bat_controlers.bat_detail);

/* GET detail bat page */
router.get('/detail', bat_controlers.bat_view_one_Page);
/* GET create bat page */
router.get('/create', bat_controlers.bat_create_Page);
/* GET create update page */
router.get('/update', bat_controlers.bat_update_Page);
/* GET create bat page */
router.get('/delete', bat_controlers.bat_delete_Page);