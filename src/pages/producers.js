import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Producers = ({ data }) => (
  <>
    <SEO title="Local Producers" />
    <h2>{data.allMarkdownRemark.totalCount} Local Producers</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </>
)

export default Producers

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
