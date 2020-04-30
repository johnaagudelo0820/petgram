import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { GlobalStyles } from './styles/GlogalStyles'
import { Logo } from './components/Logo'

export const App = () => {
  /* const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail') */

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
    </>
  )
}
