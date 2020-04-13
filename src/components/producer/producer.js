import { Link } from "gatsby"
import React from "react"
import styles from "./producer.module.css"

const Producer = ({ node }) => (
  <div className={styles.producer}>
    <div key={node.id}>
      <Link to={node.fields.slug}>
        <div className={styles.producerHead}>
          <h3>{node.frontmatter.title}</h3>
          <div>
            {node.frontmatter.tags.map(tag => (
              <span className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.producerBody}>
          <p>{node.excerpt}</p>
        </div>
        <div className={styles.readMore}>Read More...</div>
      </Link>
    </div>
  </div>
)

export default Producer
