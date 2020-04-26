import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyles } from './styles/GlogalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
