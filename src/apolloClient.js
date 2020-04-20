import ApolloClient from "apollo-boost"

const apolloClient = new ApolloClient({
  uri: `https://register-demo-graphql-server.herokuapp.com/`
})

export default apolloClient
