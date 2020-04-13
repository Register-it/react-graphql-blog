import React from "react"
import PostPreview from "../Post/PostPreview"
import PostPreviewLoader from "../Post/PostPreviewLoader"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Error from "../Error/Error"
import { withHtmlPageMetadata } from "../HtmlPageMetadata"

export const GET_POSTS = gql`
  query getPosts {
    getPosts {
      title
      subtitle
      readingTime
      id
      author {
        image
        displayName
      }
    }
  }
`

function Home() {
  const { loading, data, error } = useQuery(GET_POSTS)
  if (loading) {
    return <LoadingPreview />
  }
  if (error) {
    return <Error />
  }
  return data.getPosts.map((post) => <PostPreview post={post} key={post.id} />)
}

export default withHtmlPageMetadata(
  "GraphQL blog demo - Register devs",
  "GraphQL demo blog implementation using React and Apollo, made by Register.it developers"
)(Home)

function LoadingPreview() {
  return Array(10)
    .fill()
    .map(() => <PostPreviewLoader key={Math.random().toString(8)} />)
}
