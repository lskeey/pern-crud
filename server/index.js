require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pool = require('./db')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todos ORDER BY todo_id ASC')
        res.status(200).json(allTodos.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.get('/todos/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const todo = await pool.query(`SELECT * FROM todos WHERE todo_id = ${id}`)
        res.status(200).json(todo.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.post('/todos', async(req, res) => {
    try {
        const { todo_description } = req.body
        const newTodo = await pool.query('INSERT INTO todos (todo_description) VALUES ($1)', [todo_description])
        res.status(201).json(newTodo)
    } catch (err) {
        console.log(err.message)
    }
})

app.put('/todos/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { todo_description } = req.body
        const updateTodo =  await pool.query('UPDATE todos SET todo_description = $1 WHERE todo_id = $2', [todo_description, id])
        res.json(updateTodo)
    } catch (err) {
        console.log(err.message)
    }
})

app.delete('/todos/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const deleteTodo = await pool.query(`DELETE FROM todos WHERE todo_id = ${id}`)
        res.json(deleteTodo)
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})