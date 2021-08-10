var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    userId:{type: String},
    movieId:{type: String},
    movieDateTime:{type: String}
});

mongoose.model('order',orderSchema);