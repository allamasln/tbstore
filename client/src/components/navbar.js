/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {PropTypes} from 'prop-types'
import * as colors from 'styles/colors'
import {wrapperGutters, Link} from 'components/lib'

function NavBar({title}) {
  return (
    <header
      css={{
        background: colors.gray,
        color: colors.black,
        padding: '0.8rem 0px',
      }}
    >
      <nav
        css={{
          display: 'flex',
          alignItems: 'center',
          ...wrapperGutters,
        }}
      >
        <Link to="/">
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
