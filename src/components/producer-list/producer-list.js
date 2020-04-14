import { Link } from "gatsby"
import React from "react"
import styles from "./producer-list.module.css"
import Producer from "../producer/producer"

const ProducerList = ({ data }) => (
  <div className={styles.producerList}>
    <p className={styles.producerBlurb}>
      Check to see if the business is open for deliveries only and please avoid
      unnecessary trips. Many will be struggling to keep up with demand, so
      please be patient! Given things are changing day by day, apologies if any
      of the info here is out of date.
    </p>
    <p className={styles.producerContact}>
      <Link to="/contact">Get in touch</Link> if you have any
      suggestions/corrections!
    </p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Producer key={node.id} node={node} />
    ))}
  </div>
)

export default ProducerList
