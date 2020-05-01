import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => (
  <Layout title='App de fotos de mascotas' subtitle='Con petgram puedes encontarr fotos de animales domésticos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
