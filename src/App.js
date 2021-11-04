import React from "react";
import "./App.css";
import Tours from "./Tours";

function App({ tours }) {
  return (
    <div>
      <div className="app-container">
        <Tours tours={tours} />;
      </div>
    </div>
  );
}

export default App;
