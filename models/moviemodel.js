var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name:{type: String},
    director:{type: String},
    length:{type: String},
    category:{type: String},
    year_released:{type: Number}
});

mongoose.model('movie',movieSchema);