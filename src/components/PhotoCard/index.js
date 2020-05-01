import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be undefined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than zero`)
    }
  }
}
