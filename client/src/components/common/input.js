import * as React from 'react'
import {PropTypes} from 'prop-types'

function Input({name, className = '', ...rest}) {
  return (
    <div className={`form-group ${className}`}>
      <input name={name} id={name} className={`form-control`} {...rest} />
    </div>
  )
}

Input.defaultProps = {
  className: '',
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export {Input}
