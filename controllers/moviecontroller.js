var mongoose = require('mongoose'), Movie = mongoose.model('movie');

module.exports ={
    GetAll: function(req,res){
        console.log("Print all the movies");
        Movie.find({}, function(err,results){
            if(err) throw err;
            res.render('booking.ejs', {allthemovies:results});
        });
    },
    GetByName:function(req,res){
        console.log("List of the movies");
        const {name} = req.query;
        Movie.find({name}, function(err,results){
            if(err) throw err;
            res.render('booking.ejs', {allthemovies:results});
        });
    },
    GetByYear:function(req,res){
        console.log("List of the movies");
        var year = req.query.year;
        Movie.find({'year_released':{$gte:year}}, function(err,results){
            if(err) throw err;
            res.render('booking.ejs', {allthemovies:results});
        });
    }
}