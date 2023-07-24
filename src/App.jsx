import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [input, setInput] = useState("");

  const btns = [
    ["0", "1", "2", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["C", "0", "=", "/"],
  ];

  const onInputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const buttonClickHandler = (e) => {
    setInput((prevInput) => (prevInput += e.target.value));
  };

  const evaluateResultHandler = () => {
    try {
      if (input.length === 0) throw new Error("must require any operand");
      const result = eval(input);

      setInput(result.toString());
    } catch (e) {
      alert(e.message);
    }
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    evaluateResultHandler();
  };

  const resetInputHandler = () => {
    setInput("");
  };
  return (
    <main className="container">
      <Display
        input={input}
        onChange={onInputChangeHandler}
        onSubmit={onSubmitFormHandler}
      />
      <div className="buttons">
        {btns.map((rows) =>
          rows.map((btn) => (
            <Button
              key={Math.random().toString()}
              onClick={
                btn === "="
                  ? evaluateResultHandler
                  : btn === "C"
                  ? resetInputHandler
                  : buttonClickHandler
              }
              label={btn}
              style={
                btn === "C"
                  ? { backgroundColor: "#ff9ea8" }
                  : ["+", "-", "*", "/"].includes(btn)
                  ? { backgroundColor: "#efff8c" }
                  : {}
              }
            />
          ))
        )}
      </div>
    </main>
  );
};

export default App;
