import React from 'react'

import { GetFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <Layout title='Description' subtitile='Aqui puede encontrar tus mascotas favoritas'>
    <GetFavorites />
  </Layout>
)

export default Favs
