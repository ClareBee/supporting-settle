import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import styles from "./menu.module.css"
const Menu = ({ toggleMenu, menuIsOpen }) => {
  const labelText = "Open the menu"
  const handleToggleMenu = () => {
    toggleMenu()
  }
  return (
    <nav aria-label="Main navigation">
      <button
        className={styles.menu}
        onClick={handleToggleMenu}
        aria-label={labelText}
        aria-haspopup="true"
        aria-expanded={menuIsOpen}
      >
        <span className={styles.menuLabel}>MENU</span>
        <AiOutlineMenu />
      </button>
    </nav>
  )
}

export default Menu
