import React, { useState, useEffect } from "react";
import "./App.css";
import * as converter from "./lib/converter";
import Input from "./components/UI/Input/Input";

function App() {
  const [left, setLeft] = useState({ value: "", valid: false, touched: false });
  const [right, setRight] = useState({
    value: "",
    valid: false,
    touched: false
  });
  const [isNumeralsCorrect, setNumeralsCorrect] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (left.valid && right.valid) {
      // For simulation of asynchronous validation
      setTimeout(() => setNumeralsCorrect(true), 1000);
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

  const calculateHandler = () => {
    const leftValue = converter.fromRomanNumerals(left.value);
    const rightValue = converter.fromRomanNumerals(right.value);
    const result = converter.toRomanNumerals(leftValue + rightValue);
    setResult(result);
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
        <button disabled={!isNumeralsCorrect} onClick={calculateHandler}>
          Calculate
        </button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
