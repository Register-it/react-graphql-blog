import React, { useState } from "react"
import "./LikeButton.css"
import LikeImage from "./LikeButton.svg"
import { Fab } from "@material-ui/core"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const ADD_LIKE = gql`
  mutation AddTodo($postId: String!) {
    addLike(postId: $postId)
  }
`

export default function LikeButton({ postId, likes }) {
  const [clapCount, seClapCount] = useState(likes)

  const [addLike] = useMutation(ADD_LIKE)

  const onClapHanlder = () => {
    seClapCount(clapCount + 1)
    addLike({ variables: { postId } })
  }

  return (
    <>
      <Fab
        size="small"
        className="like-button"
        aria-label="Clap if you liked this article"
        onClick={onClapHanlder}
      >
        <img src={LikeImage} alt="Like button" />
      </Fab>
      <span className="like-count">{clapCount}</span>
    </>
  )
}
