import React from 'react'
import './App.css';
import Tours from './Tours'


function App(props) {
  return (
    <div>
      <div className="app-container">
        <h1>Check available tours</h1>
        <div className="underlining"></div>
        <Tours />
      </div>
    </div>
  );
}

export default App;
