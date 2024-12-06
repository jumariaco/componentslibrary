import { useState } from 'react'
import './App.css'
import Input from './Components/input'
import TextArea from './Components/textArea'

function App() {
  const [text, setText] = useState('')
  return (
    <>
      <Input type="text" placeholder="Enter your name" value={text} onChange={(e) => setText(e.target.value)} className="input" id="input" />
      <TextArea className="textarea" id="textarea" name="textarea" rows={10} cols={30}>
        entrer votre message {text}
      </TextArea>
      <p>Ton text est null :  {text}</p>
    </>
  )
}

export default App
