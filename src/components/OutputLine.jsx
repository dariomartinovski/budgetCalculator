import React from 'react'
import editIcon from '../images/editIcon.svg';
import delIcon from '../images/delIcon.svg';

export default function OutputLine({item, expense, amount, editItem, deleteItem}) {
  const handleEditClick = () => {
    editItem(item.id);
  }
  const handleDelClick = () => {
    deleteItem(item.id);
  }

  return (
    <div className="line">
        <p>
            <span className="expenseOutput">{expense}</span>
            <span className="amountOutput">{amount} den</span>
        </p>
        <div className="buttons">
            <button onClick={handleEditClick}><img src={editIcon} alt="edit icon"/></button>
            <button onClick={handleDelClick}><img src={delIcon} alt="del icon"/></button>
        </div>
    </div>
  );
}
