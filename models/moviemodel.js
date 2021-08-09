var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    movieId:{type: String},
    name:{type: String},
    director:{type: String},
    length:{type: String},
    category:{type: String},
    year_released:{type: Number},
    price:{type:Number}
});

mongoose.model('movie',movieSchema);