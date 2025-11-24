const mongoose = require("mongoose");

const WatchListSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    percent:{
        type:String
    },
    isDown:{
        type:Boolean
    }

});

module.exports =WatchListSchema;