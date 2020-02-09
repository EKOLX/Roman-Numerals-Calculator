import React, { useState } from "react";
import Button from "./UI/Button/Button";

const Operations = ({ pressed }) => {
  const [buttons, setButtons] = useState({
    addtClickable: true,
    subtClickable: true,
    multClickable: true
  });

  const additionHandler = () => {
    setButtons({
      addtClickable: false,
      subtClickable: true,
      multClickable: true
    });
    pressed("+");
  };

  const subtractionHandler = () => {
    setButtons({
      addtClickable: true,
      subtClickable: false,
      multClickable: true
    });
    pressed("-");
  };

  const multiplicationHandler = () => {
    setButtons({
      addtClickable: true,
      subtClickable: true,
      multClickable: false
    });
    pressed("x");
  };

  return (
    <div>
      <Button clicked={additionHandler} clickable={buttons.addtClickable}>
        +
      </Button>
      <Button clicked={subtractionHandler} clickable={buttons.subtClickable}>
        -
      </Button>
      <Button clicked={multiplicationHandler} clickable={buttons.multClickable}>
        x
      </Button>
    </div>
  );
};

export default Operations;
