import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App.js'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://petgram-server-edwin-dev.edwinbaeza05.now.sh/graphql'
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))
