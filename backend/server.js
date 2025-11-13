const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())





const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})