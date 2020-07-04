import React, { useEffect } from "react"
import "./LikeButton.css"
import LikeImage from "./LikeButton.svg"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import likeAnimation from "./LikeButtonAnimation"

const ADD_LIKE = gql`
  mutation addClap($postId: String!) {
    addLike(postId: $postId)
  }
`
export default function LikeButton({ postId, likes }) {
  const [addLike] = useMutation(ADD_LIKE)

  useEffect(() => {
    const onClapHanlder = () => {
      addLike({ variables: { postId } })
    }
    likeAnimation(likes, onClapHanlder)
  }, [likes, addLike, postId])

  return (
    <div className="canvas">
      <div id="totalCounter" className="total-counter"></div>

      <div id="clap" className="clap-container">
        <img src={LikeImage} alt="like this article"></img>
      </div>

      <div id="clicker" className="click-counter">
        <span className="counter"></span>
      </div>

      <div id="sonar-clap" className="clap-container-sonar"></div>

      <div id="particles" className="particles-container">
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
      </div>

      <div id="particles-2" className="particles-container">
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
      </div>

      <div id="particles-3" className="particles-container">
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
        <div className="triangle">
          <div className="square"></div>
        </div>
      </div>
    </div>
  )
}
