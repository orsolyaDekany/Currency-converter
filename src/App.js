import React, { useEffect, useState } from 'react';
import './App.css';
import Converter from './Converter';
import ThemeContext from './ThemeContext';


function App() {
  const [amount, setAmount] = useState(0)
  const [theme, setTheme] = useState('light')
  
  const exchangeRate = () => {
  return Math.random() * 10000;
}

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  //adding the empty array as a second parameter, means that your effect does not depend on any parameter, and so it should only be called once.

  useEffect(() => {   
    const timer = setTimeout(() => {
        setAmount(0)
    }, 5000);
      return () => clearTimeout(timer);
  }, [amount]);          

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <select
           onChange={event => setTheme(event.target.value)}
           value={theme}
           >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <div className="converter-container">

       <Converter
          header={<h1>Bitcoin converter</h1>}
          onChangeAmount={handleAmount}
          exchangeRate={0.5}
          currency="$BTC"
        />          
        <Converter
          header={<h1>Etherium converter</h1>}
          exchangeRate={1.2}
          currency="$ETH"
          />
      </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
