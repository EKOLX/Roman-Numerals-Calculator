import React from "react";
import "./Input.css";

const Input = ({ value, placeholder, changed }) => {
  return (
    <div>
      <input
        value={value}
        className="Input"
        placeholder={placeholder}
        onChange={changed}
      />
    </div>
  );
};

export default Input;
