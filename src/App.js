import React, { useState, useEffect } from "react";
import "./App.css";
import * as converter from "./lib/converter";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import Operations from "./components/Operations";

function App() {
  const [left, setLeft] = useState({ value: "", valid: false, touched: false });
  const [right, setRight] = useState({
    value: "",
    valid: false,
    touched: false
  });
  const [operation, setOperation] = useState("");
  const [validForm, setFormValidity] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (left.valid && right.valid && operation !== "") {
      // For simulation of asynchronous validation
      setTimeout(() => setFormValidity(true), 1000);
    } else {
      setFormValidity(false);
    }
  }, [left, right, operation]);

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

    let result = "";

    switch (operation) {
      case "+":
        result = converter.toRomanNumerals(leftValue + rightValue);
        break;
      case "-":
        if (leftValue - rightValue > 0)
          result = converter.toRomanNumerals(leftValue - rightValue);
        else result = "Is negative";
        break;
      case "x":
        if (leftValue * rightValue < 5000)
          result = converter.toRomanNumerals(leftValue * rightValue);
        else result = "Too big number";
        break;
      default:
        result = "";
    }

    setResult(result);
  };

  const operationsPressHandler = value => {
    setOperation(value);
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
        <Operations pressed={operationsPressHandler}></Operations>
        <Input
          placeholder="IX"
          value={right.value}
          valid={right.valid}
          touched={right.touched}
          changed={event => inputChangedHandler(event, "right")}
        />
        <Button clickable={validForm} clicked={calculateHandler}>
          Calculate
        </Button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
