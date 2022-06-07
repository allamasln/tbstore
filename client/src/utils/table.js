import {usePagedItems} from 'hooks/usePaging'

function useTable(allItems, {itemsPerPage = 0}) {
  itemsPerPage = itemsPerPage || allItems.length

  const [data, paging] = usePagedItems(allItems, itemsPerPage)

  const stats = {
    itemsCount: allItems.length,
    start: (paging.currentPage - 1) * itemsPerPage + 1,
    end: Math.min(paging.currentPage * itemsPerPage, allItems.length),
  }
  return {
    data,
    paging,
    stats,
  }
}

export {useTable}
