import React from "react";
import "./History.css";

const History = ({ history, onClick }) => {
  return (
    <div className="history">
      <h2>History</h2>
      {history.length === 0 && <p>No History!</p>}
      <ul>
        {history.map((item) => (
          <li key={Math.random().toString()}>{item}</li>
        ))}
      </ul>
      {history.length > 0 && <button onClick={onClick}>Clear All</button>}
    </div>
  );
};

export default History;
