import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <p>
                Deployed with CI magic!!
            </p>
            <div>
                <label>Number of purchased items:</label>
                <input type='number' />
            </div>
            <div>
                <label>Price of your items:</label>
                <input type='number' />
            </div>
        </div>



    );
}

export default App;
