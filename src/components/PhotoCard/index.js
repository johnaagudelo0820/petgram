import React from 'react'
import { Link } from '@reach/router'

import { useNearScreen } from '../../hooks/useNearScreen'
import { Article, ImageWrapper, Img } from './styles'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, el] = useNearScreen()

  return (
    <Article ref={el}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImageWrapper>
                <Img src={src} />
              </ImageWrapper>
            </Link>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handlerFavClick = () => {
                    toggleLike({ variables: { input: { id } } })
                  }
                  return (
                    <FavButton likes={likes} liked={liked} onClick={handlerFavClick} />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
        )
      }
    </Article>
  )
}
