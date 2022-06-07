/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {Routes, Route} from 'react-router-dom'
import {wrapperGutters} from 'components/lib'
import {NavBar} from 'components/navbar'
import {CatalogScreen} from 'screens/catalog'
import {NotFoundScreen} from 'screens/not-found'
import {wrapperGutters} from 'components/lib'

function App() {
  return (
      <div>
        <NavBar title="TBStore" />
        <main css={wrapperGutters}>
          <Routes>
            <Route path="/" element={<CatalogScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
      </div>
  )
}

export {App}
