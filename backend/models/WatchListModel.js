const mongoose = require("mongoose");
const WatchListSchema = require("../schemas/WatchListSchema");


//------------------------create Model--------------------
const WatchListModel  = mongoose.model("watchlist" , WatchListSchema);

module.exports = WatchListModel;