var mongoose = require('mongoose'), User = mongoose.model('user');

module.exports = {
    Info: function(req,res){
        console.log("User info");
        if (!req.session.userId) {
            res.redirect('/');
        }
        const userId = req.session.userId;
        User.find({userId: userId}, function(err,results){
            if(err) throw err;
            console.log(results);
            res.render('profile.ejs', {alltheusers:results});
        });
    },

    Login:function(req,res){
        console.log("Login");
        var userId = req.body.userId;
        var password = req.body.password;
        User.find({userId}, function(err, results){
            if(err) throw err;
            console.log(results);
            // check if the userId exists in the database
            if (results.length != 0) {
                // check if the password is correct
                if (results[0].password == password) {
                    req.session.userId = userId;
                    console.log(req.session.userId);
                    res.redirect('/booking');
                } else {
                    res.redirect('/login');
                }
            } else {
                res.redirect('/login');
            }
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
