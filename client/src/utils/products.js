/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {useQuery} from 'react-query'
import {client} from 'utils/api-client'
import {Spinner} from 'components/lib'

const loadingProduct = {
  name: <Spinner />,
  priceInfo: {amount: <Spinner />, currency: <Spinner />},
  rating: <Spinner />,
  vendor: {
    name: 'Cargando...',
    address: 'Cargando...',
    city: 'Cargando...',
    taxId: 'Cargando...',
  },
}

const laodingProducts = Array.from({length: 10}, (v, index) => ({
  _id: `loading-product-${index}`,
  ...loadingProduct,
}))

const productQueryConfig = {
  staleTime: 1000 * 60 * 60,
  cacheTime: 1000 * 60 * 60,
}

function useProducts() {
  const {data: products} = useQuery({
    queryKey: ['products'],
    queryFn: () => client('products').then(data => data),
    refetchOnWindowFocus: false,
    useErrorBoundary: true,
    ...productQueryConfig,
  })

  return products ?? laodingProducts
}

export {useProducts}
