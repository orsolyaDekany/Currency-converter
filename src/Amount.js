import React from 'react'

function Amount(props) {
  const {
    onChangeAmount,
    amount    
  } = props

  const [items] = React.useState([
    {
      label: "Euro", value: "Euro"
    },
    { label: "$BTC", value: "$BTC" }
  ]);
  
  return (
    <label>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
        <select>
           {items.map(({ label, value }) => (
            <option key={value} value={value}>
            {label}
            </option>
         ))}
      </select>
    </label>
  )
}

export default Amount;
