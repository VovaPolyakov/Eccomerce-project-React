import React from 'react'
import bird from '../../assets/images/bird.png'
import styles from '../../styles/About.module.scss'
const About = () => {
  return (
    <div className={styles.about}>
    <div className={styles.bird}>
    <img src={bird} className="bird" alt=''/> 
    </div>
    <div className={styles.about_text}>
    <b>RUBBISH</b> это сайт где вы сможете найти всю информацию о <b>сортировке мусора</b>,
    советы как сделать нашу планету чище,
    <b>найти подходящий контейнер</b> для вашего мусора и проложить к нему маршрут.
    Так же мы предоставляем <b>услуги</b> по вывозу и сортировке вашего мусора.
    </div>
    </div>

  )
}

export default About
