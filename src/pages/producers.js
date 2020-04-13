import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Heading from "../components/heading"
import ProducerList from "../components/producer-list"

const Producers = ({ data }) => (
  <>
    <SEO title="Local Producers" />
    <Heading heading="Local Producers" />

    <ProducerList data={data} />
  </>
)

export default Producers

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___title }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
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
