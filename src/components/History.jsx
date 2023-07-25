import React from "react";
import "./History.css";

import { v4 as uuidv4 } from "uuid";

const History = ({ history, onClick }) => {
  return (
    <div className="history">
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No History!</p>
      ) : (
        <button onClick={onClick}>Clear All</button>
      )}
      <ul>
        {history.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
