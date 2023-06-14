import React from 'react'
import HeaderShop from './HeaderShop'
import styles from '../../styles/Shop.module.scss'
import {clothing} from '../../assets/shop/shop'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Men = () => {

    const men = clothing.filter((item) => item.gender == 'men' && item.sale == false)
    const menSale = clothing.filter((item) => item.gender == 'men' && item.sale)

  return (
    <div className={styles.shop}>
        <div className={styles.row}>
            <HeaderShop/>
            <div className={styles.men_row}>
                {men.map((item,index:any) => (
                    <Link state={item.id}  to={`/shop/men/${item.id}`} className={styles.men_item}>
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
                {menSale ? menSale.map((item,index) => (
                    <Link state={item.id} to={`/shop/men/${item.id}`} className={styles.men_item_sale}>
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
