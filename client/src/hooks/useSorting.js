import * as React from 'react'
import {orderBy, get} from 'lodash'

const getValueOfProperty = (item, property) => {
  if (typeof item[property] === 'string') return item[property].toLowerCase()
  if (typeof item[property] === 'number') return parseInt(item[property], 10)

  if (property.includes('.')) {
    const propertyPath = property.split('.')
    return parseInt(get(item, propertyPath), 10)
  }

  return ''
}

const sortByProperty = (items, sortProperty, sortOrder) => {
  return orderBy(
    items,
    [item => getValueOfProperty(item, sortProperty)],
    [sortOrder],
  )
}

export const useSortedItems = (
  items,
  initial = {},
  sortItems = sortByProperty,
) => {
  const sortItemsRef = React.useRef(sortItems)

  React.useEffect(() => {
    sortItemsRef.current = sortItems
  }, [sortItems])

  const [sort, setSort] = React.useState({
    sortOrder: 'asc',
    sortProperty: '',
    ...initial,
  })

  const onSort = newSortProperty => {
    const isAsc =
      sort.sortProperty === newSortProperty && sort.sortOrder === 'asc'
    setSort({
      sortProperty: newSortProperty,
      sortOrder: isAsc ? 'desc' : 'asc',
    })
  }

  const sortedItems = React.useMemo(
    () => sortItemsRef.current(items, sort.sortProperty, sort.sortOrder),
    [items, sort],
  )

  return {
    sortedItems,
    onSort,
    ...sort,
  }
}
