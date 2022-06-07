/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as React from 'react'
import {PropTypes} from 'prop-types'
import styled from '@emotion/styled'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import {Button, FlexContainer} from 'components/lib'

const Display = styled(Button)({
  pointerEvents: 'none',
  background: 'none',
  color: colors.text,
  fontWeight: 'normal',
})

function Pagination({
  alignSelf,
  itemsCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  if (itemsCount === 0) return null

  const pagesCount = Math.ceil(itemsCount / itemsPerPage)

  if (pagesCount === 1) return null

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pagesCount

  const offset = (currentPage - 1) * itemsPerPage + 1
  const end = Math.min(offset + itemsPerPage - 1, itemsCount)

  const prevPage = () => !isFirstPage && onPageChange(currentPage - 1)
  const nextPage = () => !isLastPage && onPageChange(currentPage + 1)

  return (
    <FlexContainer alignSelf={alignSelf}>
      <Button onClick={prevPage} disabled={isFirstPage}>
        Anterior
      </Button>
      <Display>{`${offset}-${end} de ${itemsCount}`}</Display>
      <Button onClick={nextPage} disabled={isLastPage}>
        Siguiente
      </Button>
    </FlexContainer>
  )
}

Pagination.defaultProps = {
  alignSelf: 'end',
}

Pagination.propTypes = {
  alignSelf: PropTypes.string,
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export {Pagination}
