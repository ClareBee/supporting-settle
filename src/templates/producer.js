import React from "react"
import { graphql } from "gatsby"
import styles from "./producer.module.css"

export default ({ data }) => {
  const producer = data.markdownRemark
  const {
    title,
    tel,
    openingHours,
    address,
    website,
    tags,
  } = producer.frontmatter
  console.log(producer)
  return (
    <div className={styles.producerList}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <div>
          {tags.map(tag => (
            <span className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <ul className={styles.contactList}>
        <li>
          <span>Tel: </span> <a href={`tel:${tel}`}>{tel}</a>
        </li>
        <li>
          <span>Address: </span>
          {address}
        </li>
        <li>
          <span>Opening Hours: </span> {openingHours}
        </li>
        <li>
          <span>Website: </span>
          <a href={website}>{website}</a>
        </li>
      </ul>
      <div
        className={styles.producerBody}
        dangerouslySetInnerHTML={{ __html: producer.html }}
      />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        address
        website
        tel
        openingHours
        tags
      }
    }
  }
`
