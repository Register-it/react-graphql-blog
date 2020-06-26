import {ApolloClient} from "apollo-boost"
import { WebSocketLink } from "apollo-link-ws"

import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities"

// Create an http link:
const httpLink = new HttpLink({
  uri: "https://register-demo-graphql-server.herokuapp.com/"
})

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `wss://register-demo-graphql-server.herokuapp.com/graphql`,
  options: {
    reconnect: true
  }
})

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

export default apolloClient
