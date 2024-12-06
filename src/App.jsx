import { useState } from "react";
import "./App.css";
import Input from "./Components/input";
import Text from "./Components/text";
import Bienvenue from "./Page/bienvenue";

function App() {
  const [text, setText] = useState("");
  const [bienvenue, setBienvenue] = useState(false);
  return (
    <>
      {bienvenue ? (
        <Bienvenue />
      ) : (
        <>
          <Text as="h1" className="title">
            Bienvenue!
          </Text>
          <Text as="p" className="subtitle">
            Quel est votre nom?
          </Text>
          <Input
            type="text"
            placeholder="Enter your name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
            id="input"
          />
          <button onClick={() => setBienvenue(true)}>voir la page</button>
        </>
      )}
    </>
  );
}

export default App;;