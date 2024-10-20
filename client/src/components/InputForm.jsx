import { useState } from "react"

const InputForm = () => {
  const [description, setDescription] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = { 'todo_description': description }
      console.log(body)
      await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      window.location = '/'
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
    <button type="submit">Add Description</button>
  </form>
  )
}

export default InputForm