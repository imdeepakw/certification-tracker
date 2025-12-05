const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        required: true, 
        unique: true,
    }, 
    username: {
        required: true, 
        unique: true
    }, 
    password: {
        required: true, 
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User