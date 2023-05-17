import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/NavBar.module.scss'
import {links} from '../../assets/links/index'

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_row}>
        <ul className={styles.nav_menu}>
          {links.map((link) => (
            <li className={styles.nav_link} key={link.name}><Link to={link.link}>{link.name}</Link></li>
          ))}
          <button className={styles.nav_button}>Войти</button>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
