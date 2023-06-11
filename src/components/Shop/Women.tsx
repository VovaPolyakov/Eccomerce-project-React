import React from 'react'
import HeaderShop from './HeaderShop'
import styles from '../../styles/Shop.module.scss'
import {clothing} from '../../assets/shop/shop'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Men = () => {

    const women = clothing.filter((item) => item.gender == 'women' && item.sale == false)
    const womenSale = clothing.filter((item) => item.gender == 'women' && item.sale)

  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <HeaderShop/>
            <div className={styles.women_row}>
                {women.map((item,index:any) => (
                    <Link to={`/shop/women/${item.id}`} className={styles.women_item}>
                        <img src={item.image} alt={item.type}></img>
                        <div className={styles.item_name}>
                            {item.name}
                        </div>
                        <div className={styles.item_info} >
                            <div className={styles.info_type} >{item.type}</div>
                            <div className={styles.info_cost}>{item.cost} руб.</div>
                        </div>
                    </Link>
                ))}
                {womenSale ? womenSale.map((item,index) => (
                    <Link to={`/shop/women/${index + 1}`} className={styles.women_item_sale}>
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
                )) : ''}
            </div>
        </div>
    </div>
  )
}

export default Men