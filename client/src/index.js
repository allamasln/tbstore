import './bootstrap'
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {App} from './app'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
