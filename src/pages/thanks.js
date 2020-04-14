import React from "react"
import SEO from "../components/seo"
import Heading from "../components/heading/heading"
import styles from "../components/layout.module.css"

const Thanks = () => (
  <>
    <SEO title="Thanks" />
    <Heading heading="Thanks" />
    <div className={styles.centered}>Thanks for getting in touch</div>
  </>
)

export default Thanks
