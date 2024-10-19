require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

app.use(cors())
app.use(express.json)

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})