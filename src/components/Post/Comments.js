import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Avatar, Grid, Paper, TextField, Button } from "@material-ui/core"
import dayjs from "dayjs"
import Error from "../Error/Error"

export const GET_COMMENTS_QUERY = gql`
  query getComments($postId: String!, $first: Int, $after: String) {
    comments(postId: $postId, first: $first, after: $after) {
      cursor
      hasMore
      nodes {
        id
        date
        content
        author {
          id
          image
          displayName
        }
      }
    }
  }
`

function Comments({ postId }) {
  const { loading, error, data, fetchMore } = useQuery(GET_COMMENTS_QUERY, {
    variables: {
      postId,
      first: 4
    }
  })

  function loadMoreComments() {
    fetchMore({
      variables: {
        after: data.comments.cursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev
        }
        return Object.assign({}, prev, {
          comments: {
            ...fetchMoreResult.comments,
            nodes: [...prev.comments.nodes, ...fetchMoreResult.comments.nodes]
          }
        })
      }
    })
  }

  if (loading) {
    return "loading comments..."
  }
  if (error) {
    return <Error />
  }
  const { nodes: comments, hasMore } = data.comments
  return (
    <section id="comments">
      <h2>Comments</h2>
      <NewComment />
      {comments.map((comment) => (
        <Comment comment={comment} key={`comment-${comment.id}`} />
      ))}
      <LoadMoreComments hasMore={hasMore} loadMoreComments={loadMoreComments} />
    </section>
  )
}

function NewComment() {
  return (
    <Paper className="comment-container">
      <TextField
        className="comment"
        id="outlined-multiline-static"
        label="Add a Comment"
        multiline
        rows="4"
        placeholder="Your comment here"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Publish
      </Button>
    </Paper>
  )
}

function Comment({ comment: { content, date, author } }) {
  return (
    <Paper className="comment-container">
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item xs zeroMinWidth>
          <h4 className="comment-header">
            <Avatar
              alt={author.displayName}
              src={author.image}
              style={{ backgroundColor: "#ccc" }}
            />
            <div>
              <span>{author.displayName}</span>
              <br></br>
              <small
                style={{
                  textAlign: "left",
                  color: "gray",
                  fontWeight: "normal",
                  padding: 0,
                  margin: 0,
                  marginLeft: "16px"
                }}
              >
                {dayjs(date).format("DD MMM YYYY")}
              </small>
            </div>
          </h4>
          <div>{content}</div>
        </Grid>
      </Grid>
    </Paper>
  )
}

function LoadMoreComments({ hasMore, loadMoreComments }) {
  return (
    hasMore && (
      <div className="load-more-posts-container">
        <Button
          variant="contained"
          color="secondary"
          onClick={loadMoreComments}
        >
          Load more comments
        </Button>
      </div>
    )
  )
}

export default Comments
