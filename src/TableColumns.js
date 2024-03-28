import React from 'react'

const TableColumns = ( {value} ) => {
  return (
    <td key={value.value}>{`${value.key}:` + JSON.stringify(value.value)}</td> // I am concatenating here
  )
}

export default TableColumns