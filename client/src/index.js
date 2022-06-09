import './bootstrap'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {App} from './app'
import {ErrorBoundary} from 'react-error-boundary'
import {FullPageErrorFallback} from 'components/lib'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </ErrorBoundary>,
)
