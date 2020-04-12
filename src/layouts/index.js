import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Transition from "../components/transition"
import "../components/layout.css"
import styles from "../components/layout.module.css"
const Layout = ({ children, location: pathname }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className={styles.main}>
        <Transition location={pathname || ""}>{children}</Transition>
      </main>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
        <Link to="/contact"> Get in touch</Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
