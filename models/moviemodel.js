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
// db.movies.insert({movieId: "1002", name:"Batman Begins", director:"Christopher Nolan", length:"140 min", category: "Science Fiction", year_released: "2005", price: 25})
// db.movies.insert({movieId: "1003", name:"The Dark Knight", director:"Christopher Nolan", length:"152 min", category: "Science Fiction", year_released: "2008", price: 30})
// db.movies.insert({movieId: "1004", name:"The Dark Knight Rises", director:"Christopher Nolan", length:"165 min", category: "Science Fiction", year_released: "2012", price: 30})
// db.movies.insert({movieId: "1005", name:"Titanic", director:"James Cameron", length:"194 min", category: "Drama", year_released: "1994", price: 35})
// db.movies.insert({movieId: "1006", name:"Coco", director:"Lee Unkrich", length:"105 min", category: "Comedy", year_released: "2017", price: 35})
// db.movies.insert({movieId: "1007", name:"Green Book", director:"Peter Farrelly", length:"130 min", category: "Drama", year_released: "2018", price: 30})
// db.movies.insert({movieId: "1008", name:"The Truman Show", director:"Peter Weir", length:"103 min", category: "Drama", year_released: "1998", price: 30})
// db.movies.insert({movieId: "1009", name:"Inception", director:"Christopher Nolan", length:"148 min", category: "Drama", year_released: "2010", price: 25})
// db.movies.insert({movieId: "1010", name:"Avatar", director:"James Cameron", length:"162 min", category: "Science Fiction", year_released: "2009", price: 30})
// db.movies.insert({movieId: "1011", name:"Soul", director:"Pete Docter", length:"101 min", category: "Comedy", year_released: "2020", price: 30})