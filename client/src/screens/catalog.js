/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as React from 'react'
import * as mq from 'styles/media-queries'
import * as colors from 'styles/colors'
import {ProductsTable} from 'components/products-table'
import {getProducts} from 'services/productService'
import {SearchBox, SectionHeader} from 'components/lib'

function CatalogScreen() {
  const [products, setProducts] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage, setItemsPerPage] = React.useState(10)
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearchQuery = query => setSearchQuery(query)
  const handlePageChange = page => setCurrentPage(page)

  React.useEffect(() => {
    setProducts(getProducts())
  }, [])

  return (
    <>
      <SectionHeader
        css={{
          position: 'sticky',
          top: '0',
          display: 'grid',
          gridTemplateAreas: "'title search'",
          gridGap: '1rem',
          '>[role="search"]': {
            gridArea: 'search',
          },
          [mq.small]: {
            gridTemplateAreas: "'search' 'title'",
          },
        }}
      >
        <h2>Catálogo de productos</h2>
        <SearchBox
          type="search"
          name="query"
          onChange={handleSearchQuery}
          placeholder="Buscar por producto o fabricante"
        />
      </SectionHeader>
    </>
  )
}

export {CatalogScreen}
