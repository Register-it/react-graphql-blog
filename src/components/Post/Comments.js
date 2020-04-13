import React from "react"

import { Avatar, Grid, Paper, TextField, Button } from "@material-ui/core"

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

function Comments() {
  return (
    <section id="comments">
      <h2>Comments</h2>
      <Paper className="comment-container">
        <TextField
          className="comment"
          id="outlined-multiline-static"
          label="Add a Comment"
          multiline
          rows="4"
          placeholder="Your comment here"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </Paper>
      {Array(5)
        .fill()
        .map(() => (
          <Paper className="comment-container" key={Math.random().toString(16)}>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item xs zeroMinWidth>
                <h4 className="comment-header">
                  <Avatar alt="Remy Sharp" src={imgLink} />{" "}
                  <span>Michel Michel</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                  vehicula laoreet. Suspendisse congue vulputate lobortis.
                  Pellentesque at interdum tortor. Quisque arcu quam, malesuada
                  vel mauris et, posuere sagittis ipsum. Aliquam ultricies a
                  ligula nec faucibus. In elit metus, efficitur lobortis nisi
                  quis, molestie porttitor metus. Pellentesque et neque risus.
                  Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi
                  vehicula urna, nec feugiat quam lectus vitae ex.{" "}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </section>
  )
}
export default Comments
