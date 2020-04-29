import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Article, ImageWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, el] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={el}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImageWrapper>
                <Img src={src} />
              </ImageWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size={32} /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
