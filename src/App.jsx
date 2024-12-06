import { useState } from "react";
import "./App.css";
import Input from "./Components/input";
import Text from "./Components/text";
import QuestionNumber from "./Page/questionNumber";
import Button from "./Components/Button";

function App() {
  const [text, setText] = useState("");
  const [bienvenue, setBienvenue] = useState(false);
  return (
    <>
      {bienvenue ? (
        <QuestionNumber name={text} />
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
          <Button onClick={() => setBienvenue(true)} label="suivant" background_color="blue" />
        </>
      )}
    </>
  );
}

export default App;;