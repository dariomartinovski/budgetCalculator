import React from 'react'

export default function InputArea({input, setInput, buttonText, addClick, filter, setFilter}) {
  
  const handleChange = (e) => {
    setInput(prevInput => ({...prevInput,[e.target.name]:e.target.value}));
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    addClick();
  }

  const handleFilterClick = (e) => {
    setFilter(e.target.value);
  }

  return (
    <form className='inputBoxes'>
      <label htmlFor="expenseInput">
          Expense
          <input onChange={handleChange} id="expenseInput" name="expense" type="text" value={input.expense} autoComplete="off"/>
      </label>
      <label htmlFor="amountInput">
          Amount
          <input onChange={handleChange} id="amountInput" name="amount" type="text" value={input.amount} autoComplete="off"/>
      </label>
      <button onClick={handleAddClick} className="addBtn" type='submit'>{buttonText}</button>
      <div className='filter'>
        <label htmlFor="filterBox">Filter</label>
        <select onChange={handleFilterClick} id="filterBox">
          <option value="all" defaultValue>All</option>
          <option value="100">&gt; 100</option>
          <option value="200">&gt; 200</option>
          <option value="300">&gt; 300</option>
        </select>
        </div>
    </form>
  )
}
