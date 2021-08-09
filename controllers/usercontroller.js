var mongoose = require('mongoose'), User = mongoose.model('user');

module.exports ={
    Info: function(req,res){
        console.log("User info");
        const {userId} = req.query;
        User.find({userId}, function(err,results){
            if(err) throw err;
            res.render('profile.ejs', {alltheusers:results});
        });
    },
    Login:function(req,res){
        console.log("Login");
        var userId = req.query.userId;
        var password = req.query.password;
        User.find({'userId':{userId},'password':{password}}, function(err,results){
            if(err) throw err;
            res.redirect('/booking');
        });
    },
    Register: function(req,res){
        console.log("Regiser");
        var userinfo = req.body;
        userinfo={
            "userId" : req.body.userId,
            "password" : req.body.password,
            "firstname": req.body.firstname,
            "lastname" : req.body.lastname,
            "email" : req.body.email,
            "address" : req.body.address,
            "phone" : req.body.phone
        }
        User.create(userinfo,function(err,results){
            if(err) throw err;
            res.redirect('/booking');
        });
    }
}