import { Link } from "gatsby"
import React from "react"
import styles from "./producer.module.css"

const Producer = ({ node }) => (
  <div className={styles.producer}>
    <div key={node.id}>
      <Link to={node.fields.slug}>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  </div>
)

export default Producer
