import { useState } from 'react'
import './assets/App.css'
import Header from './assets/components/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Header />
      </div>

    </>
  )
}

export default App
