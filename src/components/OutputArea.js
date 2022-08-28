import React from 'react'
import OutputLine from './OutputLine'

export default function OutputArea({list, editItem, deleteItem, filter}) {
  return (
    <div className='output'>
      {list && list.map((item,i) => {
        if (filter==="all") 
          return <OutputLine key={item.id} item={item} expense={item.expense} amount={item.amount} editItem={editItem} deleteItem={deleteItem}/>
        else if(parseInt(item.amount)>parseInt(filter))
          return <OutputLine key={item.id} item={item} expense={item.expense} amount={item.amount} editItem={editItem} deleteItem={deleteItem}/>
        return "";
    })}
    </div>
  )
}
