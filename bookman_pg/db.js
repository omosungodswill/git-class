const {name} = require('ejs');
const mongoose = require('mongoose');

const connect = async () => {mongoose.connect("mongodb://localhost:27017/book_mgt")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
console.error('Connection error', err);
});}

const userSchema = new mongoose.Schema({
    username:   {type: String, required: true},
    email:      {type: String, required: true, unique: true},
    password:   {type: String, required: true}
}, {timestamps: true});

const User = mongoose.model('User', userSchema)

module.exports = {connect, User};