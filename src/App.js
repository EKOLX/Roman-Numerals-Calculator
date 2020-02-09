import React, { useState } from "react";
import "./App.css";
import Input from "./components/UI/Input/Input";

function App() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const inputChangedHandler = (event, type) => {
    const value = event.target.value;
    type === "left" ? setLeft(value) : setRight(value);
  };

  return (
    <div className="App">
      <h1>Roman Numerals Calculator</h1>
      <div>
        <Input
          placeholder="VI"
          value={left}
          changed={event => inputChangedHandler(event, "left")}
        />
        <section>+</section>
        <Input
          placeholder="IX"
          value={right}
          changed={event => inputChangedHandler(event, "right")}
        />
        <button>Calculate</button>
      </div>
      <p>Result:</p>
    </div>
  );
}

export default App;
