import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import MainLinks from "../components/main-links"
import NewsLetter from "../components/newsletter"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainLinks />
    <NewsLetter />
  </>
)

export default IndexPage
