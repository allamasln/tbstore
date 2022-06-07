import {useState, useMemo} from 'react'

function usePaging(itemCount, itemsPerPage, {initialPage = 1} = {}) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const pagesCount = Math.ceil(itemCount / itemsPerPage)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pagesCount

  let actions = useMemo(() => {
    return {
      prevPage: () => !isFirstPage && setCurrentPage(currentPage - 1),
      nextPage: () => !isLastPage && setCurrentPage(currentPage + 1),
    }
  }, [currentPage, isFirstPage, isLastPage])

  return {
    isFirstPage,
    isLastPage,
    currentPage,
    pagesCount,
    ...actions,
  }
}

export const usePagedItems = function (
  allItems,
  itemsPerPage,
  {initialPage = 1} = {},
) {
  const paging = usePaging(allItems.length, itemsPerPage, initialPage)

  const startIndex =
    allItems.length <= itemsPerPage
      ? 0
      : paging.currentPage * itemsPerPage - itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const items = allItems.slice(startIndex, endIndex)

  return [items, paging]
}
