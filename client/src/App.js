import * as React from 'react'
import {Routes, Route} from 'react-router-dom'

import {NavBar} from './components/NavBar'
import {CatalogScreen} from './screens/CatalogScreen'
import {NotFoundScreen} from './screens/NotFoundScreen'

function App() {
  return (
    <div>
      <NavBar title="TBStore" />
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<CatalogScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </main>
    </div>
  )
}

export {App}
