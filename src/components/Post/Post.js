import React from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import PostSubHeader from "./PostSubHeader"
import dayjs from "dayjs"
import LikeButton from "../LikeButton/LikeButton"
import Comments from "./Comments"
import PostTags from "./PostTags"
import PostLoader from "./PostLoader"

import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Error from "../Error/Error"
import HtmlPageMetadata from "../HtmlPageMetadata"

export const GET_POST_QUERY = gql`
  query getPost($postId: String!) {
    post(id: $postId) {
      date
      readingTime
      title
      subtitle
      content
      tags
      likes
      author {
        image
        displayName
      }
    }
  }
`

export default function Post() {
  let { id } = useParams()
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: {
      postId: id,
      first: 4
    }
  })

  if (loading) {
    return <PostLoader />
  }

  if (error) {
    return <Error />
  }

  const { post } = data
  const { title, subtitle, author, date, readingTime, tags, likes } = post
  const { displayName, image } = author

  return (
    <article>
      <HtmlPageMetadata title={title} description={`${title} - ${subtitle}`} />
      <header>
        <h1 className="post-title">{title}</h1>
        <h2 className="post-subtitle">{subtitle}</h2>
        <PostSubHeader
          title={displayName}
          subheader={`${dayjs(date).format(
            "DD MMM YYYY"
          )} · ${readingTime} min read`}
          image={image}
        />
      </header>
      <ReactMarkdown
        source={post.content}
        className="post-content"
        linkTarget="_blank"
        escapeHtml={false}
      />
      <PostTags tags={tags} />
      <div id="like-button-container" className="fade-in">
        <LikeButton likes={likes} postId={id} />
      </div>
      <Comments postId={id} />
    </article>
  )
}
