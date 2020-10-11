import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCard'


export const Home = (props) =>{
  return (<>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={props.id} />
        </>)
}
