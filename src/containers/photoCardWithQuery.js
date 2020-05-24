import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Spinner } from '../components/Spinner'
import { Error } from '../components/Error'

const GET_SINGLE_PHOTO = gql`query getSinglePhote($id:ID!){
  photo(id:$id) {
    id
    categoryId
    src
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <Error />
  }
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>)
