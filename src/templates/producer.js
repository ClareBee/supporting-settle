import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const producer = data.markdownRemark
  return (
    <>
      <div>
        <h1>{producer.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: producer.html }} />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
