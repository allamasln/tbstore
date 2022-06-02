import * as React from 'react'
import {Pagination} from '../components/common/Pagination'
import {getProducts} from '../services/productService'

const allProducts = getProducts()

function CatalogScreen() {
  const [products, setProducts] = React.useState(allProducts)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage, setItemsPerPage] = React.useState(10)

  return (
    <>
      <div className="row">
        <h2 className="col-7 mb-2">Catálogo de productos</h2>
        <div className="mb-2 col-5 align-self-end">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar por producto o fabricante"
          />
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-auto">Producto</th>
            <th className="col-md-2">Precio</th>
            <th className="col-md-2">Relevancia </th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        alignSelf="center"
        itemsCount={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}

export {CatalogScreen}
