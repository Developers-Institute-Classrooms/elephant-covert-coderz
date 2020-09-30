import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Header, Frame, SoundsProvider, createSounds, Puffs } from 'arwes';

function App() {
    const [numItems, setNumItems] = useState(0)
    const [price, setPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [taxRate, setTaxRate] = useState(6.85)
    const taxRates = [
        { stateCode: 'UT', taxRatePercent: 6.85 },
        { stateCode: 'NV', taxRatePercent: 8.00 },
        { stateCode: 'TX', taxRatePercent: 6.25 },
        { stateCode: 'AL', taxRatePercent: 4.00 },
        { stateCode: 'CA', taxRatePercent: 8.25 }
    ]

    useEffect(() => {
        setTotalPrice(numItems * price)
    })
    const addTax = (amount, taxRate) => {
        return (amount * taxRate) / 100 + amount
    }

    const handleNumItemsChange = (newNumItems) => {
        setNumItems(newNumItems);
    }

    const handlePriceChange = (newPrice) => {
        setPrice(newPrice)
    }

    const handleTaxRateChange = (newTaxRate) => {
        setTaxRate(newTaxRate)
    }

    return (

        <ThemeProvider theme={createTheme()}>
            <SoundsProvider sounds={createSounds()}>
                <Arwes>
                    <Header>
                        <p>Welcome to the tax calculator</p>
                    </Header>
                    <Puffs>
                        <Frame level={1} corners={3}>
                            <div className="App">
                                <div>
                                    <label>Number of purchased items:</label>
                                    <input value={numItems} onChange={(e) => handleNumItemsChange(e.target.value)} type='number' />
                                </div>
                                <div>
                                    <label>Price of your items:</label>
                                    <input value={price} onChange={(e) => { handlePriceChange(e.target.value) }} type='number' />
                                </div>
                                <div>
                                    <label>Your Tax Code:</label>
                                    <select onChange={(e) => handleTaxRateChange(e.target.value)}>
                                        {taxRates.map(t => <option value={t.taxRatePercent}>{t.stateCode}</option>)}
                                    </select>
                                </div>
                                <div>
                                    Your total price is: <span>${totalPrice}</span>
                                </div>
                                <div>
                                    Your total price after tax is: <span>$ {addTax(totalPrice, taxRate)}</span>
                                </div>
            The current tax rate for your selected state is: {taxRate}
                            </div>
                        </Frame>
                    </Puffs>
                </Arwes>
            </SoundsProvider>
        </ThemeProvider>
    );
}



export default App;
