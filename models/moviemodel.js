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

// manually insert these records into the mongodb
// use MovieBookingDB
// db.movies.insert({movieId: "1001", name:"The Shawshank Redemption", director:"Frank Darabont", length:"142 min", category: "Drama", year_released: "1994", price: 20})
// db.movies.insert({movieId: "1002", name:"Another Movie", director:"Frank Smith", length:"133 min", category: "Music", year_released: "1999", price: 25})
// db.movies.insert({movieId: "1003", name:"Third Movie", director:"John Darabont", length:"122 min", category: "Drama", year_released: "2002", price: 30})