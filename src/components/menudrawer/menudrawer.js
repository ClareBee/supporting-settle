import React from "react"
import { Link } from "gatsby"
import styles from "./menudrawer.module.css"
const MenuDrawer = ({ toggleMenu, menuIsOpen }) => {
  const labelText = "Close the menu"
  return (
    <>
      <nav
        className={`${styles.menuDrawer} ${
          menuIsOpen ? styles.opening : styles.closing
        }`}
      >
        <button
          className={styles.button}
          aria-label={labelText}
          onClick={() => toggleMenu()}
          onKeyDown={() => toggleMenu()}
        >
          &times;
        </button>
        <ul
          className={styles.menuList}
          onClick={() => toggleMenu()}
          onKeyDown={() => toggleMenu()}
          role="button"
        >
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/producers">local producers</Link>
          </li>
          <li>
            <Link to="/positive-inspiration#positivity">keep positive</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      {menuIsOpen && (
        <div
          className={styles.menuBackdrop}
          onClick={() => toggleMenu()}
          onKeyDown={() => toggleMenu()}
          role="button"
          tabIndex={0}
        ></div>
      )}
    </>
  )
}

export default MenuDrawer
