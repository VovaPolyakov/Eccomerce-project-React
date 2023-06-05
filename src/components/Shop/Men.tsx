import React from 'react'
import HeaderShop from './HeaderShop'
import styles from '../../styles/Shop.module.scss'
import {men} from '../../assets/shop/shop'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Men = () => {

  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <HeaderShop/>
            <div className={styles.men_row}>
                {men.map((item,index:any) => (
                    <Link to={`/shop/men/${index + 1}`} className={styles.men_item}>
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
            </div>
        </div>
    </div>
  )
}

export default Men
