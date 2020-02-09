import React from "react";
import "./Button.css";

const Button = ({ children, clickable, clicked }) => {
  return (
    <button className="Button" onClick={clicked} disabled={!clickable}>
      {children}
    </button>
  );
};

export default Button;
