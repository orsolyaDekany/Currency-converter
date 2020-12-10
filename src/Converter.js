import React, { useState } from 'react';
import Amount from './Amount';

function Converter(props) {
    const {
        header,
        currency,
        exchangeRate
      } = props

    const [amount, setAmount] = useState(0)

    const handleAmount = (e) => {
        setAmount(e.target.value)
      }

    return (
        <div>
            <div className="header">{header}</div>
        
            <Amount
            onChangeAmount={handleAmount}
            amount={amount}
            name="Euro"

            />          
            <div className="equals">=</div>        
            <Amount
            amount={amount * exchangeRate}
            name={currency}
            />
        </div>
    )
}

export default Converter;
