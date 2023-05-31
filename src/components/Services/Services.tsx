import React from 'react'
import trash from '../../assets/images/trash.png'
import questionmark from '../../assets/images/questionmark.png'
import styles from '../../styles/Services.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Continue from '../Services/Continue'
const Services = () => {
  return ( 
<div className={styles.services}>
<div className={styles.block1}>
<div className={styles.block1_text}>
    <div className={styles.b1_t1}><b>Вывезем</b> ваш мусор и <b>отсортируем</b></div>
    <div className={styles.b1_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
    <button className={styles.button1}><Link to='/continue'>продолжить</Link> </button>
    
</div>
<img src={trash} className="trash" alt=''/> 
</div>
<div className={styles.block2}>
<div className={styles.block2_text}>
    <div className={styles.b2_t1}>Soon...</div>
    <button className={styles.button2}>продолжить</button>
</div>
<img src={questionmark} className="questionmark" alt=''/> 
</div>

</div>
  );
  
}

export default Services
