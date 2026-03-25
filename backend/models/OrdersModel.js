const mongoose = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");

//------------------------create Model--------------------
const OrdersModel = mongoose.model("order",OrdersSchema);;

module.exports = OrdersModel;