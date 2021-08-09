var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId:{type: String},
    userId:{type: String},
    movieId:{type: String},
    movieDateTime:{type: Date}
});

mongoose.model('order',orderSchema);