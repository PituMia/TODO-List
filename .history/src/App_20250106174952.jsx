import { useState } from 'react'
import './assets/App.css'
import Header from './assets/components/header'
import TaskInput from './assets/components/TaskInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Header />
   <TaskInput />
      </div>

    </>
  )
}

export default App
