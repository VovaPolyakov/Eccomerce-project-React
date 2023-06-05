import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Shop.module.scss'
import cart from '../../assets/images/bx_basket.png'
import classnames from 'classnames/bind'



const HeaderShop = () => {
    let cx = classnames.bind(styles);
    const [active,setActive] = useState(false)
    

  return (
    <div>
         <div className={styles.shop_buttons}>
            <Link className={styles.shop_link} to='/shop/men'><button className={styles.button_men}>Мужчинам</button></Link>
            <Link className={styles.shop_link} to='/shop/women'><button className={styles.button_women}>Женщинам</button></Link>
            <Link className={styles.shop_link} to='/shop/sale'><button className={styles.button_sale}>Sale</button></Link>
            <img alt='cart' className={styles.shop_cart} src={cart}></img>
        </div>
    </div>
  )
}

export default HeaderShop
