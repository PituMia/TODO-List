import { useState } from 'react'
import './assets/css/App.css'
import Header from './assets/components/header'
import TaskInput from './assets/components/TaskInput'
import Task from './assets/components/Task'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Header />
   <TaskInput />
   <Task />
      </div>

    </>
  )
}

export default App
