import React from "react"
import PostSubHeader from "./PostSubHeader"
import Skeleton from "@material-ui/lab/Skeleton"

export default function PostLoader() {
  return (
    <div>
      <Skeleton animation="wave" width="100%" height={160} />
      <Skeleton animation="wave" width="100%" height={80} />
      <PostSubHeader
        title={<Skeleton animation="wave" width={300} height={20} />}
        subheader={<Skeleton animation="wave" width={250} height={20} />}
        image={null}
      />
      <Skeleton animation="wave" width="100%" height={900} />
    </div>
  )
}
