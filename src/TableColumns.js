import React from 'react'

const TableColumns = ( {value} ) => {
  return (
    <td key={value.value}>{`${value.key}:` + JSON.stringify(value.value)}</td>
  )
}

export default TableColumns