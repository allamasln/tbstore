/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import PropTypes from 'prop-types'
import * as React from 'react'
import {TableBase, TBody, THead, TR, TH, TD} from 'components/lib'

const TableContext = React.createContext()

export function Table(props) {
  const table = React.useRef()
  const columns = useColumns(table)

  return (
    <TableBase ref={table} {...props}>
      <TableContext.Provider value={{columns}} {...props} />
    </TableBase>
  )
}

const Cell = ({children, ...rest}) => {
  const {columns} = React.useContext(TableContext)
  const td = React.useRef()
  const index = useIndexOfCell(td)

  return (
    <TD data-label={columns[index]} ref={td} {...rest}>
      {children}
    </TD>
  )
}

const DetailsCell = ({children, ...rest}) => {
  const {columns} = React.useContext(TableContext)

  return (
    <TD colspan={columns.lenght} {...rest}>
      {children}
    </TD>
  )
}

const Head = THead
const Body = TBody
const Row = TR
const Column = TH

// Both custom hooks are helpers to gets a responsive table using css
function useColumns(table) {
  const [columns, setColumns] = React.useState([])

  React.useEffect(() => {
    if (!table.current) return null
    setColumns(table.current.firstChild.innerText.split('\t'))
  }, [table])

  return columns
}

function useIndexOfCell(cell) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!cell.current) return null

    const AllCellsInRow = cell.current.parentElement.children

    setIndex(Array.from(AllCellsInRow).indexOf(cell.current))
  }, [cell])

  return index
}

Cell.propTypes = {
  colspan: PropTypes.string,
}

export {Head, Body, Column, Row, Cell, DetailsCell}
