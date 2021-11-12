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
exports.bat_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Bat.findById(req.params.id)
        // Do updates of properties
        if (req.body.batBrand)
            toUpdate.batBrand = req.body.batBrand;
        if (req.body.batCost) toUpdate.batCost = req.body.batCost;
        if (req.body.batWeight) toUpdate.batWeight = req.body.batWeight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
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
// for a specific Bat.
exports.bat_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Bat.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};