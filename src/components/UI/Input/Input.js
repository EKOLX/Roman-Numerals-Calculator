import React from "react";
import "./Input.css";

const Input = ({ value, placeholder, valid, touched, changed }) => {
  const inputClasses = ["Input"];

  if (touched) {
    if (valid) inputClasses.push("Valid");
    else inputClasses.push("Invalid");
  }

  return (
    <div>
      <input
        value={value}
        className={inputClasses.join(" ")}
        placeholder={placeholder}
        onChange={changed}
      />
    </div>
  );
};

export default Input;
