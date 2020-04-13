import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Heading from "../components/heading"
import ProducerList from "../components/producer-list"

const Producers = ({ data }) => (
  <>
    <SEO title="Local Producers" />
    <Heading heading="Local Producers" />
    <p>
      Check to see if the business is open for deliveries only and please avoid
      unnecessary trips where possible. Given things are changing day by day,
      apologies if any of the info here is out of date.{" "}
      <Link to="/contact">Get in touch</Link> if you have any
      suggestions/corrections!
    </p>
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
