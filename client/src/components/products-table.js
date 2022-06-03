import * as React from 'react'
import {PropTypes} from 'prop-types'

function ProductsTable({products}) {
  return (
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
  )
}

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      priceInfo: PropTypes.object.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      vendor: PropTypes.object.isRequired,
    }),
  ).isRequired,
}

export {ProductsTable}
