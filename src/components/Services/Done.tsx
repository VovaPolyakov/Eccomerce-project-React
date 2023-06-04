import React from 'react'
import fulltrash from '../../assets/images/fulltrash.png'
import styles from '../../styles/Done.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import dude from '../../assets/images/dude.png'



const Done = () => {
  return (
    <div className={styles.done}>
    <div className={styles.block4}>
    <div className={styles.block4_text}>
        <div className={styles.b4_t1}><b>Ваш заказ принят</b></div>
        <div className={styles.b4_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
        <div className={styles.price}>ЦЕНА: <b>4.50 руб.</b></div>
        <div className={styles.yourinfo}>
        <div className={styles.youraddress}>Пр-т Независимости 120 кв 10</div>
        <div className={styles.yournumber}>+375295686709</div>
        </div>
        <button className={styles.button4}>Курьер в пути</button>
    </div>
    <img src={dude} className="dude" alt=''/> 
    </div></div>
  )
}

export default Done