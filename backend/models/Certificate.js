const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    level: {
        type: String, 
        required: true,
    },
    issuedDate: {
        type: Date, 
        required: true
    },
    expirationDate: {
        type: Date, 
        required: true, 
    }, 
    category: {
        type: String, 
        required: true
    }
})