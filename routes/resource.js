var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bat_controller = require('../controllers/bat');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// bat ROUTES ///
// POST request for creating a bat.
router.post('/resource/bat', bat_controller.bat_create_post);
// DELETE request to delete bat.
router.delete('/resource/bat/:id', bat_controller.bat_delete);
// PUT request to update bat.
router.put('/resource/bat/:id', bat_controller.bat_update_put);
// GET request for one gas.
router.get('/resource/bat/:id', bat_controller.bat_detail);
// GET request for list of all gas items.
router.get('/resource/bat', bat_controller.bat_list);
module.exports = router;