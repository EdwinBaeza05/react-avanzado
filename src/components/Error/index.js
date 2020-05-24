import React from 'react'
import { BoxError } from './style'
import { MdSentimentDissatisfied } from 'react-icons/md'

export const Error = () => {
  return (
    <BoxError>
      <MdSentimentDissatisfied size='55px' color='red' />
      <h2>Error, Intente Mas Tarde</h2>
    </BoxError>
  )
}
