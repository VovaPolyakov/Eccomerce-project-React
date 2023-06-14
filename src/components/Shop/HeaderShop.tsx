import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Shop.module.scss'
import cart from '../../assets/images/bx_basket.png'
import classnames from 'classnames'
import { useLocation } from 'react-router-dom'



const HeaderShop = () => {

  const location = useLocation()

  
  return (
    <div>
         <div className={styles.shop_buttons}>
            <Link className={styles.shop_link} to='/shop/men'><button className={classnames(styles.button_men,{[styles.button_men_active]:location.pathname === '/shop/men' || location.pathname === `/shop/men/${location.state}` })}>Мужчинам</button></Link>
            <Link className={styles.shop_link} to='/shop/women'><button className={classnames(styles.button_women,{[styles.button_women_active]:location.pathname === '/shop/women' || location.pathname === `/shop/women/${location.state}` })}>Женщинам</button></Link>
            <Link className={styles.shop_link} to='/shop/sale'><button className={classnames(styles.button_sale,{[styles.button_sale_active]:location.pathname === '/shop/sale' })}>Sale</button></Link>
            <img alt='cart' className={styles.shop_cart} src={cart}></img>
        </div>
    </div>
  )
}

export default HeaderShop
