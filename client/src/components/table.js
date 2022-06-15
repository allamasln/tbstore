/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as React from 'react'
import PropTypes from 'prop-types'
import {isEmpty, size} from 'lodash'
import {
  TableStyles,
  TBodyStyles,
  THeadStyles,
  TRStyles,
  THStyles,
  TDStyles,
  SortIcon,
} from 'components/lib'

// Context for building a responsive table using css [type="data-label"]
const TableContext = React.createContext()

const Body = TBodyStyles
const Cell = TDStyles
const DetailsCell = TDStyles

export function Table(props) {
  const [columns, setColumns] = React.useState([])

  return (
    <TableStyles {...props}>
      <TableContext.Provider value={[columns, setColumns]} {...props} />
    </TableStyles>
  )
}

function Head({sortProperty, sortOrder, onSort, children: hCells, ...rest}) {
  const [columns, setColumns] = React.useContext(TableContext)
  const hasSorting = sortOrder && sortProperty && onSort

  React.useEffect(() => {
    if (!isEmpty(columns)) return

    setColumns(hCells)
  }, [columns, hCells, setColumns])

  const headers = !hasSorting
    ? hCells
    : React.Children.map(hCells, hCell => {
        return React.cloneElement(hCell, {
          onSort,
          sortOrder: hCell.props.id === sortProperty ? sortOrder : false,
        })
      })

  return (
    <THeadStyles {...rest}>
      <Row>{headers}</Row>
    </THeadStyles>
  )
}

Head.defaultProps = {
  sortProperty: '',
  sortOrder: false,
  onSort: null,
}

Head.propTypes = {
  sortProperty: PropTypes.string,
  sortOrder: PropTypes.oneOf([false, 'asc', 'desc']),
  onSort: PropTypes.func,
}

function Column({id, children, sortOrder, onSort, ...rest}) {
  return (
    <THStyles onClick={() => onSort(id)} sortOrder={sortOrder} {...rest}>
      {children}
      <SortIcon size="15" order={String(sortOrder)} />
    </THStyles>
  )
}

Column.defaultProps = {
  sortOrder: false,
  onSort: null,
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf([false, 'asc', 'desc']),
  onSort: PropTypes.func,
}

function Row({children: cells, ...rest}) {
  const [columns] = React.useContext(TableContext)

  const rowCells = React.Children.map(cells, cell => {
    if (size(columns) === 0) return cell
    return cell.type === TDStyles
      ? cell.props['data-label']
        ? React.cloneElement(cell, {colSpan: size(columns)})
        : React.cloneElement(cell, {
            'data-label': columns[cells.indexOf(cell)].props.children,
          })
      : cell
  })

  return <TRStyles {...rest}>{rowCells}</TRStyles>
}

export {Head, Body, Column, Row, Cell, DetailsCell}
