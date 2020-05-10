import React from "react"
import { withStyles, Typography, Avatar } from "@material-ui/core"

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center"
  },
  /* Styles applied to the avatar element. */
  avatar: {
    flex: "0 0 auto",
    marginRight: 16,
    backgroundColor: `#cccccc66`
  },
  /* Styles applied to the action element. */
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: -8,
    marginRight: -8
  },
  /* Styles applied to the content wrapper element. */
  content: {
    flex: "1 1 auto"
  },
  /* Styles applied to the title Typography element. */
  title: {},
  /* Styles applied to the subheader Typography element. */
  subheader: {}
}

function PostSubHeader(props) {
  const { subheader, title, image, classes } = props

  return (
    <div className={classes.root}>
      <Avatar
        aria-label={title}
        className={classes.avatar}
        src={image}
        alt="Author image"
      ></Avatar>
      <div className={classes.content}>
        <Typography
          variant="body2"
          className={classes.title}
          component="span"
          display="block"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          className={classes.subheader}
          color="textSecondary"
          component="span"
          display="block"
        >
          {subheader}
        </Typography>
      </div>
    </div>
  )
}
export default withStyles(styles)(PostSubHeader)
