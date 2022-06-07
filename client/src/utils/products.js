import {useQuery} from 'react-query'
import {client} from 'utils/api-client'

function useProducts() {
  const {data: products} = useQuery({
    queryKey: ['posts'],
    queryFn: () => client('posts').then(data => data),
  })

  return products ?? []
}

export {useProducts}
