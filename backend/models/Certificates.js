import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true, 
    }, 
    issuedBy: {
        type: String,
        required: true, 
        trim: true, 
    }, 
    issuedDate: {
        type: Date, 
    }, 
    expiryDate: {
        type: Date,
    }, 
    expiresInDays: {
        type: Number, 
    }, 
    certificationURL: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
})

export const Certificate = mongoose.model('Certificate', certificateSchema)