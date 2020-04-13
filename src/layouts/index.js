import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import MenuDrawer from "../components/menudrawer"
import Transition from "../components/transition"
import "../components/layout.css"
import styles from "../components/layout.module.css"
const Layout = ({ children, location: pathname }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <div className={styles.layout}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleMenu={toggleMenu}
      />
      <MenuDrawer toggleMenu={toggleMenu} menuIsOpen={menuIsOpen} />
      <main className={styles.main}>
        <Transition location={pathname || ""}>{children}</Transition>
      </main>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>{" "}
          by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://clarebee.com"
          >
            ClareBee
          </a>
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
