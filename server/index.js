require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

app.use(cors())

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/todos', async(req, res) => {})

app.get('/todos/:id', async(req, res) => {})

app.post('/todos', async(req, res) => {})

app.put('/todos/:id', async(req, res) => {})

app.delete('/todos/:id', async(req, res) => {})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})