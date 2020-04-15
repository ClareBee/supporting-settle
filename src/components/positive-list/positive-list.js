import React from "react"
import styles from "./positive-list.module.css"
import { positiveStuff } from "../../data/positivestuff"
const PositiveList = () => {
  return (
    <div className={styles.positiveList} id="positivity">
      <p>I'll try and update this regularly, so keep checking back for more!</p>
      <ul className={styles.list}>
        {positiveStuff.map(item => {
          const { title, description, website, image } = item
          return (
            <li key={title} className={styles.item}>
              <h2>{title}</h2>
              <a href={website} target="_blank" rel="noopenner noreferrer">
                {website}
              </a>
              <p className={styles.description}>{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PositiveList
