import React, { useState } from "react"
import "./LikeButton.css"
import LikeImage from "./LikeButton.svg"
import { Fab } from "@material-ui/core"

export default function LikeButton({ likes }) {
  const [clapCount, seClapCount] = useState(likes)
  const [myClaps, setMyClaps] = useState(0)

  const onClapHanlder = () => {
    seClapCount(clapCount + 1)
    setMyClaps(myClaps + 1)
  }

  return (
    <>
      <Fab
        disabled={myClaps === 50}
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
