var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId:{type: String},
    name:{type: String},
    movieName:{type: String},
    phone:{type: Number}
});

mongoose.model('order',orderSchema);