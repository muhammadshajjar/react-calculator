import React from "react";
import "./Button.css";
const Button = ({ label, onClick, style, onChange }) => {
  return (
    <button onClick={onClick} value={label} style={style} onChange={onChange}>
      {label}
    </button>
  );
};

export default Button;
