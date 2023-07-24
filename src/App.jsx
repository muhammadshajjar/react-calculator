import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";

import { AiOutlineHistory } from "react-icons/ai";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [toggleHistory, setToggleHistory] = useState(false);

  useEffect(() => {
    const historyItemsFromStorage = JSON.parse(localStorage.getItem("history"));
    historyItemsFromStorage && setHistory(historyItemsFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

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

      const histroyResult = `${input} = ${result.toString()}`;
      setHistory((prevHistory) => [...prevHistory, histroyResult]);
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

  const toggleHistoryHandler = () => {
    setToggleHistory((prevState) => !prevState);
  };

  const clearHistoryHandler = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };
  return (
    <main className="container">
      <Display
        input={input}
        onChange={onInputChangeHandler}
        onSubmit={onSubmitFormHandler}
      />
      <div className="actions">
        <button onClick={toggleHistoryHandler}>
          <AiOutlineHistory style={{ fontSize: "20px", fontWeight: "bold" }} />
        </button>
      </div>

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
      {toggleHistory && (
        <History history={history} onClick={clearHistoryHandler} />
      )}
    </main>
  );
};

export default App;
