/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {QueryClient, QueryClientProvider} from 'react-query'
import {Routes, Route} from 'react-router-dom'
import {CatalogScreen} from 'screens/catalog'
import {NotFoundScreen} from 'screens/not-found'
import {wrapperGutters} from 'components/lib'
import {NavBar} from 'components/navbar'

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
