import React from 'react'
import HeaderShop from './HeaderShop'
import styles from '../../styles/Shop.module.scss'
import {clothing} from '../../assets/shop/shop'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sale = () => {

    const sale = clothing.filter((item) => item.sale)

  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <HeaderShop/>
            <div className={styles.sale_row}>
                {sale.map((item,index:any) => (
                  <Link to={`/shop/women/${index + 1}`} className={styles.sale_item}>
                  <img src={item.image} alt={item.type}></img>
                  <div className={styles.item_name_cost}>
                      <div className={styles.item_name}>{item.name}</div>
                      <div className={styles.item_cost}>{item.cost} руб.</div>
                  </div>
                  <div className={styles.item_info} >
                      <div className={styles.info_type} >{item.type}</div>
                      <div className={styles.info_withSale}>{item.withSale} руб.</div>
                  </div>
            </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sale
