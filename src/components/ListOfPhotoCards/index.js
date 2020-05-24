import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/withPhotos'

// componente de orden superior
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  // console.log(data)
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} id={photo.id} src={photo.src} />)
      }
    </ul>
  )
}
