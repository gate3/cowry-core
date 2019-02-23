const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true}, 
    password: {type:String, required:true, unique:true},
    first_name: String,
    last_name: String,
    last_login: Date
},
{
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema)