import { Link } from "gatsby"
import React from "react"
import styles from "./heading.module.css"

const Heading = ({ heading }) => (
  <div className={styles.heading}>
    <h1>{heading}</h1>
  </div>
)

export default Heading
