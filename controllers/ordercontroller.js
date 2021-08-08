var mongoose = require('mongoose'), User = mongoose.model('order');

module.exports ={
    GetAll: function(req,res){
        console.log("Order history");
        const {userId} = req.query;
        User.find({userId}, function(err,results){
            if(err) throw err;
            res.render('orderlist.ejs', {alltheorders:results});
        });
    },
    Create: function(req,res){
        console.log("Start a new order");
        var orderinfo = req.body;
        orderinfo={
            "orderId" : req.body.orderId,
            "userId" : req.body.userId,
            "movieName": req.body.movieName,
            "time" : req.body.time,
            "phone" : req.body.phone
        }
        Movie.create(orderinfo,function(err,results){
            if(err) throw err;
            res.redirect('/orders');
        });
    }
}