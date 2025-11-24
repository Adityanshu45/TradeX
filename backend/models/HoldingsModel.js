const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");



//------------------------create Model--------------------
const HoldingsModel= mongoose.model("holding" , HoldingsSchema);


module.exports= HoldingsModel;