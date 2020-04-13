import React from "react"
import { Chip } from "@material-ui/core"
export default function PostTag({ tags = [] }) {
  return (
    <section>
      {tags.map((tag) => (
        <Chip className="tag" label={tag} key={tag} />
      ))}
    </section>
  )
}
