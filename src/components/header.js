import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Menu from "./Menu"
const Header = ({ siteTitle, toggleMenu }) => (
  <header className={styles.header}>
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
    <Menu toggleMenu={toggleMenu} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
