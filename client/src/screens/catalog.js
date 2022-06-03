import * as React from 'react'
import {Pagination} from 'components/common/pagination'
import {SearchField} from 'components/common/search-field'
import {ProductsTable} from 'components/products-table'
import {getProducts} from 'services/productService'

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
      <div className="row mb-2">
        <h2 className="col">Catálogo de productos</h2>
        <SearchField
          className="col"
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Buscar por producto o fabricante"
        />
      </div>
      <ProductsTable products={products} />
      <Pagination
        alignSelf="center"
        itemsCount={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export {CatalogScreen}
