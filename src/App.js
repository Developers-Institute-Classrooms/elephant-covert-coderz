import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Covert Coderz Killer Tax Calculator
        </p>
        <p>
          Deployed with CI magic!!
        </p>
        <label>Number of purchased items</label>
       <input type='number'/>
      </header>
    </div>
  );
}

export default App;
