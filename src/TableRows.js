import React from 'react'
import TableColumns from './TableColumns'

const TableRows = ({ item }) => {
  const func = (params, arr = []) => {
    Object.entries(params).map(([key, value]) => {
        if(typeof value !== "object"){
          return  arr.push({key : key, value :  value})
        }
      return  func(value, arr)
  })
  return arr;
}
  return (
    <tr key={item.id}>
      {func(item).map((value) => (
        <TableColumns value={value}/>
      ))}
    </tr>
  )
}

export default TableRows