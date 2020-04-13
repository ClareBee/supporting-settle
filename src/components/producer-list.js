import { Link } from "gatsby"
import React from "react"
import styles from "./producer-list.module.css"
import Producer from "./producer"

const ProducerList = ({ data }) => (
  <div className={styles.producerList}>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Producer node={node} />
    ))}
  </div>
)

export default ProducerList
