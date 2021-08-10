var mongoose = require('mongoose'), Order = mongoose.model('order'), Movie = mongoose.model('movie');

module.exports ={
    GetAll: function(req,res){
        console.log("Order history");
        if (!req.session.userId) {
            res.redirect('/');
        }
        const userId = req.session.userId;
        Order.find({userId}, function(err,results){
            if(err) throw err;
            Movie.find({}, function(err,movieResults){
                if(err) throw err;
                res.render('records.ejs', {alltheorders:results, allthemovies:movieResults});
            })
        });
    },

    Delete: function(req,res){
        console.log("Delete");
        const orderId = req.body.orderId_delete;
        console.log(orderId);
        Order.deleteOne({_id: orderId}, function(err, results){
            if (err) {
                // log the error instead of crashing the app
                console.log(err);
            };
            res.redirect('/records');
        });
    },

    Update:function(req,res){
        console.log("Update");
        const orderId = req.body.orderId_update;
        Order.updateOne({_id: orderId}, {movieId: req.body.movieId, movieDateTime: req.body.movieDateTime}, function(err,results){
            if (err) {
                // log the error instead of crashing the app
                console.log(err);
            }
            res.redirect('/records');
        });
    },
    Create: function(req,res){
        console.log("Start a new order");
        var orderinfo = req.body;
        orderinfo={
            "userId" : req.body.userId,
            "movieId": req.body.movieId,
            "movieDateTime" : req.body.movieDateTime
        }
        Order.create(orderinfo,function(err,results){
            if(err) throw err;
            res.redirect('/records');
        });
    }
}
