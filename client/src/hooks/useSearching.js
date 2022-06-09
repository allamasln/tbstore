import * as React from 'react'
import {matchSorter} from 'match-sorter'
import {isEmpty} from 'lodash'
import {useDebounced} from 'hooks/useDebounced'

export const useMatchedItems = (allItems, properties = []) => {
  const [query, setQuery] = React.useState('')

  const debouncedQuery = useDebounced(query, 500)

  const MatchedItems = React.useMemo(() => {
    if (!isEmpty(allItems)) {
      if (isEmpty(properties)) return allItems

      const items = matchSorter(allItems, debouncedQuery, {
        keys: properties,
        threshold: matchSorter.rankings.CONTAINS,
      })

      return items
    }

    return []
  }, [allItems, debouncedQuery, properties])

  return {
    query,
    setQuery,
    MatchedItems,
  }
}
