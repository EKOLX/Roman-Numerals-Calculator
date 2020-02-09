import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/UI/Input/Input";

function App() {
  const [left, setLeft] = useState({ value: "", valid: false, touched: false });
  const [right, setRight] = useState({
    value: "",
    valid: false,
    touched: false
  });
  const [isNumeralsCorrect, setNumeralsCorrect] = useState(false);

  useEffect(() => {
    if (left.valid && right.valid) {
      setNumeralsCorrect(true);
    } else {
      setNumeralsCorrect(false);
    }
  }, [left, right]);

  const inputChangedHandler = (event, type) => {
    const value = event.target.value;

    const valid = validateInput(value);

    type === "left"
      ? setLeft({ value, valid, touched: true })
      : setRight({ value, valid, touched: true });
  };

  const validateInput = value => {
    const input = new RegExp("^[MDCLXVI]+$");
    return input.test(value);
  };

  return (
    <div className="App">
      <h1>Roman Numerals Calculator</h1>
      <div>
        <Input
          placeholder="VI"
          value={left.value}
          valid={left.valid}
          touched={left.touched}
          changed={event => inputChangedHandler(event, "left")}
        />
        <section>+</section>
        <Input
          placeholder="IX"
          value={right.value}
          valid={right.valid}
          touched={right.touched}
          changed={event => inputChangedHandler(event, "right")}
        />
        <button disabled={!isNumeralsCorrect}>Calculate</button>
      </div>
      <p>Result:</p>
    </div>
  );
}

export default App;
