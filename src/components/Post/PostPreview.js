import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { CardHeader } from "@material-ui/core"
import { Link } from "react-router-dom"
import PostSubHeader from "./PostSubHeader"
import dayjs from "dayjs"

export default function PostPreview({ post }) {
  const classes = useStyles()
  const { title, subtitle, author, date, readingTime, id } = post
  const { displayName, image } = author
  return (
    <Link to={`/${toSlug(title)}-${id}`} className="link-normal">
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardHeader
            title={title}
            subheader={subtitle}
            className={classes.header}
          />
          <CardContent className={classes.content}>
            <PostSubHeader
              title={displayName}
              subheader={`${dayjs(date).format(
                "DD MMM YYYY"
              )} · ${readingTime} min read`}
              image={image}
            />
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={`https://api.adorable.io/avatars/151/${id}.png`}
          title="Live from space album cover"
        />
      </Card>
    </Link>
  )
}

function toSlug(title) {
  return title.replace(/[\W_]+/g, "_")
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    margin: theme.spacing()
  },
  details: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 480,
    minWidth: 480,
    "@media (max-width: 680px)": {
      minWidth: "50%"
    }
  },
  header: {
    "@media (max-width: 680px)": {
      padding: theme.spacing()
    }
  },
  content: {
    flex: "1 0 auto",
    padding: 0,
    paddingLeft: 8
  },
  cover: {
    width: 151,
    height: 151,
    "@media (max-width: 680px)": {
      maxHeight: 80,
      margin: theme.spacing()
    }
  }
}))
