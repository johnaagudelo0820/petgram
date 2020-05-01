import React from 'react'
import { Helmet } from 'react-helmet'

import { Div, Title, SubTitle } from './styles'

export const Layout = ({ children, title, subtitile }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitile && <meta name='description' constent={subtitile} />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitile && <SubTitle>{subtitile}</SubTitle>}
      {children}
    </Div>
  </>
)
