const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')

const certificateRoutes = require('./routes/certificateRoutes')

app.use(express.json())

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})


app.use('/api/certificate', certificateRoutes)

const PORT = 3000
