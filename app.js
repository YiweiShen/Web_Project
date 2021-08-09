var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./models/moviemodel');
require('./models/ordermodel');
require('./models/usermodel');

mongoose.connect('mongodb://127.0.0.1:27017/MovieDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('We are connected on mongoose!');
});

var movieController = require('./controllers/moviecontroller.js');
var orderController = require('./controllers/ordercontroller.js');
var userController = require('./controllers/usercontroller.js');


app.get('/booking', movieController.GetAll);


app.get('/login', function(req, res){
    res.render('login.ejs')
});

app.get('/register', function(req, res){
    res.render('register.ejs')
});

app.post('register', userController.Register);

app.get('/records', function(req, res){
    res.render('records.ejs')
});

app.listen(3000,function(){
    console.log('this express server is running at http://127.0.0.1:3000');
    console.log('You may visit http://localhost:3000/login');
});