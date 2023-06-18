import React from 'react'
import styles from '../../styles/Header.module.scss'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_row}>
            <div className={styles.header_logo}>
                <Link to='/'><img src={logo} alt='logo'></img></Link>
            </div>
            <div className={styles.header_search}>
                <button><img src={search} alt='search'></img></button>
                <input type='text' placeholder='Поиск'></input>
            </div>
            <button className={styles.header_lan}>BY</button>
        </div>
      </div>
    </div>
  )
}

export default Header 
