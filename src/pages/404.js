import React from "react"
import SEO from "../components/seo"
import Heading from "../components/heading/heading"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Heading heading="404: Not Found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
