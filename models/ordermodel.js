var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId:{type: String},
    userId:{type: String},
    movieName:{type: String},
    time:{type: String},
    phone:{type: String}
});

mongoose.model('order',orderSchema);