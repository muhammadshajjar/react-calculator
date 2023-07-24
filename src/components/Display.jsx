import React from "react";
import "./Display.css";
const Display = ({ input, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={input} onChange={onChange} placeholder="0" />
    </form>
  );
};

export default Display;
