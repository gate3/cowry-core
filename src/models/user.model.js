const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    first_name: String,
    last_name: String,
    last_login: Date
},
{
    timestamps: true
});

module.exports = mongoose.model('user', UserSchema)