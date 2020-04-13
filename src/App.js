import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { BrowserRouter, Route } from "react-router-dom"
// import { ApolloProvider } from "@apollo/react-hooks"
// import client from "./apolloClient"
import { MockedProvider } from "@apollo/react-testing"

import Post from "./components/Post/Post"
import ScrollToTop from "./layout/ScrollToTop"
import Home from "./components/Home/Home"
import AppContainer from "./layout/AppContainer"

import mocks from "./mocks/mocks"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ApolloProvider client={client}> */}
      <CssBaseline />
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <AppContainer>
            <ScrollToTop />
            <Route path="/" exact component={Home} />
            <Route path="/:slug-:id" component={Post} />
          </AppContainer>
        </BrowserRouter>
      </MockedProvider>
      {/* </ApolloProvider> */}
    </ThemeProvider>
  )
}

export default App
