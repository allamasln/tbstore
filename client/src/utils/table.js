import {useMatchedItems} from 'hooks/useSearching'
import {usePagedItems} from 'hooks/usePaging'
import {useSortedItems} from 'hooks/useSorting'

function useTable(
  allItems,
  {queryProperties = [], sortProperty, sortOrder, itemsPerPage = 0},
) {
  itemsPerPage = itemsPerPage || allItems.length

  const {MatchedItems, ...searching} = useMatchedItems(
    allItems,
    queryProperties,
  )

  const {sortedItems, ...sorting} = useSortedItems(MatchedItems, {
    sortProperty,
    sortOrder,
  })

  const [data, paging] = usePagedItems(sortedItems, itemsPerPage)

  const stats = {
    itemsCount: sortedItems.length,
    start:
      sortedItems.length > 0 ? (paging.currentPage - 1) * itemsPerPage + 1 : 0,
    end: Math.min(paging.currentPage * itemsPerPage, sortedItems.length),
  }
  return {
    data,
    searching,
    sorting,
    paging,
    stats,
  }
}

export {useTable}
