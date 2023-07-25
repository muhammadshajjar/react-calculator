import React from "react";
import "./Button.css";
const Button = ({ value, onPress, style }) => {
  return (
    <button onClick={onPress} value={value} style={style}>
      {value}
    </button>
  );
};

export default Button;
