import * as React from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'

function NavBar({title}) {
  return (
    <header className="navbar bg-light">
      <nav className="container">
        <Link className="navbar-brand" to="/">
          <h1>{title}</h1>
        </Link>
      </nav>
    </header>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export {NavBar}
