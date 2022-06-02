import * as React from 'react'
import {getProducts} from '../services/productService'

const allProducts = getProducts()

function CatalogScreen() {
  const [products, setProducts] = React.useState(allProducts)

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

      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="./">
              <span>&laquo;</span>
            </a>
          </li>
          <li className="page-item disabled">
            <span className="page-link">1-10 de 11</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="./">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export {CatalogScreen}
