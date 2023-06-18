import React from 'react'
import HeaderShop from '../Shop/HeaderShop'
import styles from '../../styles/Shop.module.scss'


const Cart = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <HeaderShop/>
        </div>
    </div>
  )
}

export default Cart
