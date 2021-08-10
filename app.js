var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(sessions({
    secret: "bnlkj9834nkjvnkhisdl34jsd98fj2", // random string
    saveUninitialized: true,
    expires: new Date(Date.now() + (1000 * 60 * 60)),  // session expire after 1 hour  
    resave: false 
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./models/moviemodel');
require('./models/ordermodel');
require('./models/usermodel');

mongoose.connect('mongodb://127.0.0.1:27017/MovieBookingDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('We are connected on mongoose!');
});

var movieController = require('./controllers/moviecontroller.js');
var orderController = require('./controllers/ordercontroller.js');
var userController = require('./controllers/usercontroller.js');

app.get('/booking', movieController.GetAll);

app.post('/booking', orderController.Create);

app.get(['/login', '/'], function(req, res){
    res.render('login.ejs')
});
app.post('/login', userController.Login);

app.get('/register', function(req, res){
    res.render('register.ejs')
});

app.post('/register', userController.Register);

app.get('/records', orderController.GetAll);

app.get('/profile', userController.Info);

app.post('/records/update', orderController.Update);

app.post('/records/delete', orderController.Delete);

app.get('/logout',(req,res) => {
    // clear session when logout
    req.session.destroy();
    res.redirect('/');
});

// PUT method to be used in Postman
app.put('/records/update/:orderId/:movieId/:movieDateTime', function (req, res) {
    var newOrder = {$set:{movieId: req.params.movieId, movieDateTime: req.params.movieDateTime}};
    Order.updateOne({orderId}, newOrder, function(err,results){
        if(err) throw err;
    });
    res.send('Got a PUT request at /records/update');
});

// DELETE method to be used in Postman
app.delete('/records/delete/:orderId', function (req, res) {
    Order.deleteOne({orderId}, function(err,results) {
        if(err) throw err;
    });
    res.send('Got a PUT request at /records/delete');
});

app.listen(3000,function(){
    console.log('this express server is running at http://127.0.0.1:3000');
    console.log('You may visit http://localhost:3000/login');
});