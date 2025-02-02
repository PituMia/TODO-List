import { useState } from 'react'
import './assets/css/App.css'
import Header from './assets/components/header'
import TaskInput from './assets/components/TaskInput'

import TaskList from './assets/components/TaskList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Header />
   <TaskList />
   
      </div>

    </>
  )
}

export default App
