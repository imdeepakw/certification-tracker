const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const certificateRoutes = require('./routes/certificateRoutes')

app.use(express.json())



app.use('/api/certificate', certificateRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})