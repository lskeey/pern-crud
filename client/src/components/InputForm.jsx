import { Button, TextInput } from "flowbite-react"
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
  <form className="max-w-96 min-w-max mx-auto flex gap-4 mb-8 px-4" onSubmit={handleSubmit}>
    <TextInput className="w-full" value={description} placeholder="Please enter your task description here" onChange={e => setDescription(e.target.value)} />
    <Button type="submit">Add</Button>
  </form>
  )
}

export default InputForm