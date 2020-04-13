import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Fab from "@material-ui/core/Fab"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import React from "react"
import Search from "../components/Search/Search"
import { Link } from "react-router-dom"
import { IconButton } from "@material-ui/core"
import GitHubImage from "./GithubIcon.svg"

export default function ({ children }) {
  const classes = useStyles()
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            Blog
          </Typography>
          <Search />
          <div>
            <a
              href="https://github.com/Register-it/react-graphql-blog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code on github"
              title="View source code on github"
            >
              <IconButton
                aria-label="Source code of this blog"
                aria-controls="menu-appbar"
                color="inherit"
              >
                <img src={GitHubImage} alt="Github icon"></img>
              </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <span id="back-to-top-anchor" />
      <Container
        className={classes.container}
        classes={{ maxWidthMd: classes.maxWidthMd }}
        maxWidth="md"
      >
        {children}
      </Container>
      <ScrollToggle>
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ScrollToggle>
    </>
  )
}

function ScrollTop(props) {
  const { children } = props
  const classes = useStyles()

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "end" })
    }
  }

  return (
    <div onClick={handleClick} role="presentation" className={classes.root}>
      {children}
    </div>
  )
}
function ScrollToggle(props) {
  const { children, threshold = 100 } = props
  const scrollOverThreshold = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  })

  return (
    <div
      role="presentation"
      className={scrollOverThreshold ? "fade-in" : "fade-out"}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "inherit",
    textDecoration: "none"
  },
  container: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    margin: "auto"
  },
  maxWidthMd: {
    maxWidth: 680
  }
}))
