import { useState, useEffect } from "react"

const ListTodos = () => {
  const [todos, setTodos] = useState([])
  const getTodos = async() => {
    try {
      const res = await fetch('http://localhost:3000/todos')
      const data = await res.json()
      setTodos(data)
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  const deleteTodo = async(id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' })
      setTodos(todos.filter(todo => todo.todo_id !== id))
      window.location = '/'
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.todo_id}>
          <p>{todo.todo_description}</p>
          <button type="button" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ListTodos