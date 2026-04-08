import mongoose from "mongoose";

export default async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to the DB, my friend')
    } catch (error) {
        console.log(error)
    }
}