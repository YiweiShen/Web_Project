var mongoose = require('mongoose'), Order = mongoose.model('order');

module.exports ={
    GetAll: function(req,res){
        console.log("Order history");
        if (!req.session.userId) {
            res.redirect('/');
        }
        const userId = req.session.userId;
        Order.find({userId}, function(err,results){
            if(err) throw err;
            res.render('records.ejs', {alltheorders:results});
        });
    },
    Delete: function(req,res){
        console.log("Delete");
        const {orderId} = req.query;
        Order.deleteOne({orderId}, function(err,results){
            if(err) throw err;
            res.render('records.ejs', {alltheorders:results});
        });
    },
    Update:function(req,res){
        console.log("Update");
        const {orderId} = req.query;
        var newOrder = {$set:{name: req.body.movieId, movieDateTime : req.body.movieDateTime}};
        Order.updateOne({orderId}, newOrder, function(err,results){
            if(err) throw err;
            res.render('records.ejs', {alltheorders:results});
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