import { useState } from "react";
import Text from "../Components/text";
import Input from "../Components/input";
import Button from "../Components/Button";

export default function QuestionNumber({ name }) {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [next, setNext] = useState(false);

  const handleSubmit = () => {
    if (number2 === number) {
      return <p>bravo</p>;
    }
    if (number2 < number) {
      return <p>le nombre est plus grand</p>;
    }
    if (number2 > number) {
      return <p>le nombre est plus petit</p>;
    }
  };
  return (
    <div>
      {next ? (
        <div>
          <Text as="h1" className="title">
            Bienvenue {name} !
          </Text>
          <Text as="p" className="subtitle">
            devine le nombre ?
          </Text>
          <Input
            type="number"
            placeholder="Enter your number"
            className="input"
            id="input"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
          <p>{handleSubmit()}</p>
        </div>
      ) : (
        <div>
          <Text as="h1" className="title">
            Bienvenue {name} !
          </Text>
          <Text as="p" className="subtitle">
            Quel est votre nombre?
          </Text>
          <Input
            type="number"
            placeholder="Enter your number"
            className="input"
            id="input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            onClick={() => setNext(true)}
            label="Vérifier"
            background_color="blue"
          />
        </div>
      )}
    </div>
  );
}
