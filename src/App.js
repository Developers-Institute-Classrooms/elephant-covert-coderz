import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [numItems, setNumItems] = useState(0)
    const [price, setPrice] = useState(0)

    return (
        <div className="App">
            <p>
                Deployed with CI magic!!
            </p>
            <div>
                <label>Number of purchased items:</label>
                <input value={numItems} onChange={(e)=>{setNumItems(e.target.value)}} type='number' />
            </div>
            <div>
                <label>Price of your items:</label>
                <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type='number' />
             </div>
            <div>
                Your total price is: <span>${ price * numItems }</span>
            </div>
        </div>
    );
}

export default App;
