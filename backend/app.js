import 'dotenv/config'
import express from "express";
import connectDB from './config/db.js';


const app = express()
connectDB()


app.use(express.json())

app.get('/', (req, res) => {
    res.send('whatssap')
})

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
