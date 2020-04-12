import { Link } from "gatsby"
import React from "react"
import styles from "./main-links.module.css"
import { AiOutlineSmile, AiOutlineShoppingCart } from "react-icons/ai"

const MainLinks = () => (
  <div className={styles.linkContainer}>
    <Link to="/producers">
      <div className={styles.link}>
        <div className={styles.shoppingIcon}>
          <AiOutlineShoppingCart />
        </div>

        <h3>Local Producers</h3>
        <p>
          Some local businesses doing online orders, collections and/or
          deliveries.
        </p>
      </div>
    </Link>
    <Link to="/positive-inspiration">
      <div className={styles.link}>
        <AiOutlineSmile />

        <h3>Staying Positive</h3>
        <p>A list of online resources to keep your spirits up</p>
      </div>
    </Link>
  </div>
)

export default MainLinks
