import React from 'react'

export default function TotalAmount({total}) {
  return (
    <div className='total'>
      <h1>Total left: {840 - total} den</h1>
      <h3>Total spent: {total} den</h3>
    </div>
  )
}
