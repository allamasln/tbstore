/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {Routes, Route} from 'react-router-dom'
import {wrapperGutters} from 'components/lib'
import {NavBar} from 'components/navbar'
import {CatalogScreen} from 'screens/catalog'
import {NotFoundScreen} from 'screens/not-found'

import {QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavBar title="TBStore" />
        <main css={wrapperGutters}>
          <Routes>
            <Route path="/" element={<CatalogScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  )
}

export {App}
