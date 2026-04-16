import mongoose from "mongoose";
import { Certificate } from "./models/Certificates.js";

const updateField = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to db')

        await Certificate.updateMany({expiresInDays: {$gte: 0}}, {$inc: {expiresInDays: -1}})
        console.log('updated the field')

        await mongoose.disconnect()
        console.log('disconnected from the database')

        process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

updateField()