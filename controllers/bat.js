var Bat = require('../models/bat');
// List of all Bat
exports.bat_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Bat list');
};
// for a specific Bat.
exports.bat_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Bat detail: ' + req.params.id);
};
// Handle Bat create on POST.
exports.bat_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Bat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"batBrand":"SS", "batCost":120, "batWeight":10}
    document.batBrand = req.body.batBrand;
    document.batCost = req.body.batCost;
    document.batWeight = req.body.batWeight;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Bat delete form on DELETE.
exports.bat_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Bat delete DELETE ' + req.params.id);
};
// Handle Bat update form on PUT.
exports.bat_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Bat update PUT' + req.params.id);
};

// List of all Bat
exports.bat_list = async function (req, res) {
    try {
        theBat = await Bat.find();
        res.send(theBat);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.bat_view_all_Page = async function (req, res) {
    try {
        theBat = await Bat.find();
        res.render('bat', {
            title: 'Bat Search Results',
            results: theBat
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};