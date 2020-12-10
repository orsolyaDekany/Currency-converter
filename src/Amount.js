import React from 'react'

function Amount(props) {
  const {
    onChangeAmount,
    amount,
    name    
  } = props

 
  return (
    <label>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <span className="currency">{name}</span>
    </label>
  )
}

export default Amount;
