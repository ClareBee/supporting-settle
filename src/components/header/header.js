import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Menu from "../menu/menu"

const matchingPaths = [
  "/",
  "/positive-inspiration/",
  "/positive-inspiration",
  "/contact",
]
const Header = ({ siteTitle, toggleMenu, pathname }) => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    {matchingPaths.includes(pathname.pathname) && (
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
            Victoria Hall & the Settle Community Hub
          </a>
        </p>
      </div>
    )}
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
