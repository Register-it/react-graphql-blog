import React from "react"
import PostPreview from "../Post/PostPreview"
import PostPreviewLoader from "../Post/PostPreviewLoader"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Error from "../Error/Error"
import { withHtmlPageMetadata } from "../HtmlPageMetadata"
import { Button, Typography } from "@material-ui/core"

export const GET_POSTS = gql`
  query getPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      cursor
      hasMore
      nodes {
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
  }
`

const LIMIT = 5

function Home() {
  const { loading, fetchMore, data, error } = useQuery(GET_POSTS, {
    variables: {
      first: LIMIT
    }
  })

  function loadMorePosts() {
    fetchMore({
      variables: {
        after: data.posts.cursor
      },
      updateQuery: (prev, { fetchMoreResult }, ...p) => {
        if (!fetchMoreResult) {
          return prev
        }
        return Object.assign({}, prev, {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes]
          }
        })
      }
    })
  }

  if (loading) {
    return <LoadingPreview size={LIMIT} />
  }
  if (error) {
    return <Error />
  }
  const { hasMore } = data.posts
  return (
    <section>
      {data.posts.nodes.map((post) => (
        <PostPreview post={post} key={post.id} />
      ))}
      <LoadMorePosts hasMore={hasMore} loadMorePosts={loadMorePosts} />
    </section>
  )
}

function LoadMorePosts({ hasMore, loadMorePosts }) {
  return (
    <div className="load-more-posts-container">
      {hasMore && (
        <Button variant="contained" color="secondary" onClick={loadMorePosts}>
          Load more posts
        </Button>
      )}
      {!hasMore && (
        <Typography align="center" gutterBottom>
          Nice work
          <span role="img" aria-label="congratulation">
            👏
          </span>
          ! You reach the end
        </Typography>
      )}
    </div>
  )
}

export default withHtmlPageMetadata(
  "GraphQL blog demo - Register devs",
  "GraphQL demo blog implementation using React and Apollo, made by Register.it developers"
)(Home)

function LoadingPreview({ size = 5 }) {
  return Array(size)
    .fill()
    .map(() => <PostPreviewLoader key={Math.random().toString(8)} />)
}
