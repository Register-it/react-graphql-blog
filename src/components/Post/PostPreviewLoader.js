import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardHeader } from "@material-ui/core"
import PostSubHeader from "./PostSubHeader"
import Skeleton from "@material-ui/lab/Skeleton"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    margin: theme.spacing(),
    width: "100%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    "@media (max-width: 680px)": {
      padding: theme.spacing()
    }
  },
  content: {
    flex: "1 0 auto"
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

export default function PostPreviewLoader() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardHeader
          title={<Skeleton animation="wave" width="100%" height={60} />}
          subheader={<Skeleton animation="wave" width="100%" height={60} />}
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <PostSubHeader
            title={<Skeleton animation="wave" width={300} height={20} />}
            subheader={<Skeleton animation="wave" width={250} height={20} />}
            image={null}
          />
        </CardContent>
      </div>
      <Skeleton animation="wave" width={151} height={151} />
    </Card>
  )
}
