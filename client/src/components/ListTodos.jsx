import { useState, useEffect } from "react"
import EditModal from "./EditModal"
import { Button } from "flowbite-react"

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-max">
      {todos.map((todo) => (
        <div key={todo.todo_id} className="flex justify-between items-center border rounded-md shadow-md px-4 py-6 gap-4">
          <p className="font-semibold">{todo.todo_description}</p>
          <div className="flex gap-2">
            <EditModal todo={ todo } />
            <Button size="xs" color="failure" type="button" onClick={() => deleteTodo(todo.todo_id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListTodos