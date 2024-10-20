import './App.css'
import InputForm from './components/InputForm'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <main className='container mx-auto max-w-[1280px]'>
      <h1 className='min-w-max font-bold text-2xl lg:text-3xl uppercase mt-12 mb-8 text-center'>PERN Stack Todo</h1>
      <InputForm />
      <ListTodos />
    </main>
  )
}

export default App
