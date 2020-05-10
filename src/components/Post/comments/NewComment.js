import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { TextField, Paper, Button } from "@material-ui/core"
import Error from "../../Error/Error"

const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $comment: String!, $author: String!) {
    addComment(
      postId: $postId
      comment: { authorDisplayName: $author, content: $comment }
    ) {
      id
      date
      content
      author {
        image
        displayName
      }
    }
  }
`

export default function NewComment({ postId, onCommentAdded }) {
  const [addComment, { loading, error }] = useMutation(ADD_COMMENT, {
    onError: () => {},
    onCompleted: (data) => {
      onCommentAdded(data.addComment)
      setComment("")
      setAuthor("")
    }
  })

  const [comment, setComment] = useState("")
  const [author, setAuthor] = useState("")

  function onAuthorChange(e) {
    setAuthor(e.target.value)
  }
  function onCommentChange(e) {
    setComment(e.target.value)
  }

  function onFormSubmit(e) {
    e.preventDefault()
    addComment({ variables: { postId, comment, author } })
  }

  return (
    <Paper className="comment-container">
      <form onSubmit={onFormSubmit}>
        <TextField
          className="comment"
          label="Your name"
          placeholder="Bob Malley"
          variant="outlined"
          required
          value={author}
          onChange={onAuthorChange}
        />
        <TextField
          className="comment"
          label="Your Comment"
          multiline
          rows="4"
          placeholder="Your comment here"
          variant="outlined"
          required
          value={comment}
          onChange={onCommentChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          Add a comment{" "}
          {loading && (
            <span className="spinner" role="img" aria-label="loading">
              ⌚
            </span>
          )}
        </Button>
      </form>
      {error && <Error />}
    </Paper>
  )
}
