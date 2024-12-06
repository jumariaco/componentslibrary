import { useState } from 'react'
import './App.css'
import Input from './Components/input'
import Text from './Text';

function App() {
  const [text, setText] = useState('')
  return (
    <>
    <Text as="h1" className="title">
        Bienvenue!
      </Text>
      <Text as="p" className="subtitle">
        Quel est votre nom?
      </Text>
      <Input type="text" placeholder="Enter your name" value={text} onChange={(e) => setText(e.target.value)} className="input" id="input" />
    </>
  )
}

export default App
