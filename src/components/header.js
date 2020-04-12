import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    {/* <div className={styles.home}>
      <Link to="/">
        <span className={styles.headerLabel}>HOME</span>
        <AiOutlineHome />
      </Link>
    </div> */}
    <h1 className={styles.heading}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <div className={styles.blurb}>
      <p>
        A list of local providers in Settle & the surrounding area to help you
        stay home, protect the NHS & save lives during Covid-19.
      </p>
      <p>
        Settle's Community Response is run by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.settlevictoriahall.org.uk/communityresponse"
        >
          Victoria Hall
        </a>
      </p>
    </div>
    <div className={styles.menu}>
      <span className={styles.headerLabel}>MENU</span>
      <AiOutlineMenu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
