import React from 'react'
import { PhotoCardWithQuery } from '../containers/photoCardWithQuery'

export const Detail = ( { detailId } ) => {
  return <PhotoCardWithQuery id={detailId} />
}
