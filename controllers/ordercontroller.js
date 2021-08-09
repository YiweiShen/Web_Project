var mongoose = require('mongoose'), Order = mongoose.model('order');

module.exports ={
    GetAll: function(req,res){
        console.log("Order history");
        Order.find({}, function(err,results){
            if(err) throw err;
            res.render('records.ejs', {alltheorders:results});
        });
    },
    Create: function(req,res){
        console.log("Start a new order");
        var orderinfo = req.body;
        orderinfo={
            "orderId" : req.body.orderId,
            "userId" : req.body.userId,
            "movieId": req.body.movieId,
            "movieDateTime" : req.body.movieDateTime
        }
        Order.create(orderinfo,function(err,results){
            if(err) throw err;
            res.redirect('/booking');
        });
    }
}