import * as React from 'react'

function usePaging(itemCount, itemsPerPage, initialPage) {
  const [currentPage, setCurrentPage] = React.useState(initialPage)

  const pagesCount = Math.ceil(itemCount / itemsPerPage)

  const isFirstPage = itemCount === 0 || currentPage === 1
  const isLastPage = itemCount === 0 || currentPage === pagesCount

  const actions = {
    prevPage: () => !isFirstPage && setCurrentPage(oldPage => oldPage - 1),
    nextPage: () => !isLastPage && setCurrentPage(oldPage => oldPage + 1),
  }

  React.useEffect(() => {
    if (itemCount !== 0) return
    if (currentPage <= pagesCount) return

    setCurrentPage(1)
  }, [currentPage, itemCount, pagesCount])

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
  initialPage = 1,
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
