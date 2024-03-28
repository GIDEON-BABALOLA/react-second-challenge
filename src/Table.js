import React from 'react'
import TableRows from "./TableRows.js"
const Table = ({ items }) => {
  return (
    <table className='table-container'>
    <tbody>
    {items.map((item) => (
       <TableRows key = {item.id} item ={item}/>
    ))}
    </tbody>

    </table>
  )
}

export default Table