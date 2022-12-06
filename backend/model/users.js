const mongoose = require('mongoose');

const {Schema} = mongoose;

const Users = new Schema({
    name:String,
    email:String,
    password:String,
    token:String
})

const User = mongoose.model('user',Users);

module.exports = {User}