import React from "react";
import "./App.css";
import Tours from "./Tours";

function App({ tours }) {
  return (
    <div>
      <div className="app-container">
        <h1>Check available tours</h1>
        <div className="underlining"></div>
        <Tours tours={tours} />;
      </div>
    </div>
  );
}

export default App;
