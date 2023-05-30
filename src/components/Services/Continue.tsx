import React from 'react'
import trash from '../../assets/images/trash.png'
import styles from '../../styles/Services.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Done from '../Services/Done'


const Continue = () => {
  return (
    <div className={styles.continue}>
    <div className={styles.block3}>
    <div className={styles.block3_text}>
        <div className={styles.b3_t1}><b>Вывезем</b> ваш мусор и <b>отсортируем</b></div>
        <div className={styles.b3_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
        <button className={styles.button3}><Link to='/done'>продолжить</Link> <Routes>
            <Route path='/done' element={<Done/>}/></Routes></button>
    </div>
    <img src={trash} className="trash" alt=''/> 
    </div></div>
  )
}

export default Continue
