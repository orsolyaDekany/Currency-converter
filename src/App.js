import React, { useEffect, useState } from 'react';
import './App.css';
import Amount from './Amount'
import ThemeContext from './ThemeContext';


function App() {
  const [amount, setAmount] = useState(0)
  const [theme, setTheme] = useState('light')
  
  /*function exchangeRate() {
  return Math.random() * 10000;
}*/
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  useEffect(() => {   
    const timer = setTimeout(() => {
        setAmount(0)
    }, 5000);
      return () => clearTimeout(timer);
  }, []);          

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
       <h1>Convert</h1>       
       <Amount
          onChangeAmount={handleAmount}
          amount={amount}
          name="Euro"

        />          
        <div className="equals">=</div>        
        <Amount
          amount={amount * (Math.random() * 10000)}
          name="$BTC"
          />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
