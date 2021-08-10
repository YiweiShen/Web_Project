var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId:{type: String},
    userId:{type: String},
    movieId:{type: String},
    movieDateTime:{type: String}
});

mongoose.model('order',orderSchema);