/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {PropTypes} from 'prop-types'
import {useIsFetching} from 'react-query'
import * as colors from 'styles/colors'
import {Spinner, wrapperGutters, Link} from 'components/lib'

function NavBar({title}) {
  const isFetching = useIsFetching()

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
          justifyContent: 'space-between',
          ...wrapperGutters,
        }}
      >
        <Link to="/">
          <h1>{title}</h1>
        </Link>
        {isFetching && <Spinner size="30" />}
      </nav>
    </header>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export {NavBar}
