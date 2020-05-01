import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { GlobalStyles } from './styles/GlogalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import Context from './Context'

/* const UserLogged = ({ children }) => {
  return children({ isAuth: true })
} */

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
      <Context.Consumer>
        {({ isAuth }) => (
          isAuth ? (
            <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </Router>
          )
        )}
      </Context.Consumer>
      <NavBar />
    </>
  )
}
