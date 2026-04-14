import 'dotenv/config'
import express from "express";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import certRoutes from './routes/certRoutes.js'
import cookieParser from 'cookie-parser';

const app = express()
connectDB()


app.use(express.json())
app.use(cookieParser()) 


app.use('/api/auth', authRoutes)
app.use('/api/cert', certRoutes)


app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
