import * as React from 'react'
import {PropTypes} from 'prop-types'
import {Input} from 'components/common/input'

function SearchField({value, onChange, ...rest}) {
  return (
    <Input
      type="search"
      name="query"
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      {...rest}
    />
  )
}

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export {SearchField}
