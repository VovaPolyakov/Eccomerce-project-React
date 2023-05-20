import React from 'react'
import styles from '../../styles/Shop.module.scss'
import cart from '../../assets/images/bx_basket.png'
import { Link } from 'react-router-dom'
import ShopRouter from './ShopRouter'

const Shop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <div className={styles.shop_buttons}>
                <button className={styles.button_men}><Link to='/shop/men'>Мужчинам</Link></button>
                <button className={styles.button_women}><Link to='/shop/women'>Женщинам</Link></button>
                <button className={styles.button_sale}><Link to='/shop/sale'>Sale</Link></button>
                <img className={styles.shop_cart} src={cart}></img>
            </div>
            <ShopRouter/>
        </div>
    </div>
  )
}

export default Shop
