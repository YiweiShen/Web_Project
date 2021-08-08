var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId:{type: String},
    password:{type: String},
    firstname:{type: String},
    lastname:{type: String},
    email:{type: String},
    address:{type: String},
    phone:{type: String}
});

mongoose.model('user',userSchema);