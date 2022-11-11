import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
     <h1>AppTasks | SideLab</h1> 
    </div>
  )
}

export default App
