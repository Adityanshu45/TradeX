const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");



//------------------------create Model--------------------
const PositionsModel = mongoose.model("position" , PositionsSchema);

module.exports = PositionsModel;