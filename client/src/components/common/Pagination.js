import * as React from 'react'
import {PropTypes} from 'prop-types'

function Pagination({
  alignSelf,
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChange,
  className,
  ...rest
}) {
  if (itemsCount === 0) return null

  const pagesCount = Math.ceil(itemsCount / itemsPerPage)
  if (pagesCount === 1) return null

  const offset = (currentPage - 1) * itemsPerPage + 1
  const end = currentPage * itemsPerPage

  const justifyContentClassName = alignSelf
    ? `justify-content-${alignSelf}`
    : ''

  return (
    <ul
      className={`pagination ${className} ${justifyContentClassName}`}
      {...rest}
    >
      <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span>Anterior</span>
        </button>
      </li>
      <li className="page-item disabled">
        <span className="page-link mx-1 border-0">
          {`${offset}-${end < itemsCount ? end : itemsCount} de ${itemsCount}`}
        </span>
      </li>
      <li
        className={
          currentPage === pagesCount ? 'page-item disabled' : 'page-item'
        }
      >
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span>Siguiente</span>
        </button>
      </li>
    </ul>
  )
}

Pagination.defaultProps = {
  alignSelf: 'end',
  className: '',
}

Pagination.propTypes = {
  alignSelf: PropTypes.string,
  className: PropTypes.string,
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export {Pagination}
