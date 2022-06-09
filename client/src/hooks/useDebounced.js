import * as React from 'react'
import {debounce} from 'lodash'

export function useDebounced(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  const debouncedHandler = debounce(() => setDebouncedValue(value), delay)
  React.useEffect(() => debouncedHandler(), [debouncedHandler])

  return debouncedValue
}
