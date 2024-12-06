import { useState } from 'react'
import './App.css'
import Input from './Components/input'
import Text from './Text';

function App() {
  const [name, setName] = useState('')
  return (
    <>
    <Text as="h1" className="title">
        Bienvenue!
      </Text>
      <Text as="p" className="subtitle">
        Quel est votre nom?
      </Text>
      <Input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="input" id="input" />
    </>
  )
}

export default App
