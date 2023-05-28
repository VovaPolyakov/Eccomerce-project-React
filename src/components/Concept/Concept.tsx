import React from 'react'
import death from '../../assets/images/death.png'
import styles from '../../styles/Concept.module.scss'
const Concept = () => {
  return (
    <div className={styles.concept}>
     <div className={styles.concept_text}>
        <div className={styles.concept_text1}><b>Концепция RUBBISH</b> - это развитие и <b>сохранение</b> окружающей среды. Наша программа нацелена на <b>формирование</b> экологического мышления, а так же <b>облегчение</b> жизни человека.</div>
        <div className={styles.concept_text2}>Наша команда разработала ресурс с помощью которого вы <b>узнаете</b> все о сортировке мусора, <b>поиска</b> контейнера, пунктов его приема и вывозом мусора нашими сотрудниками.</div></div>
        <img src={death} className="death" alt=''></img> 
        </div>

  )
}

export default Concept