const mongoose = require("mongoose")
const batSchema = mongoose.Schema({
batBrand: String,
batCost: Number,
batWeight: Number
})
module.exports = mongoose.model("Bat",
batSchema)