import { useState } from 'react'
import './App.css'
import Input from './Components/input'

function App() {
  const [name, setName] = useState('')
  return (
    <>
      <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="input" id="input" />
    </>
  )
}

export default App
