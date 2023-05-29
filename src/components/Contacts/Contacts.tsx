import React from 'react'
import art from '../../assets/images/art.png'
import styles from '../../styles/Contacts.module.scss'
const Contacts = () => {
  return (
    <div className={styles.contacts}>
    <div className={styles.contacts_text}>
       <div className={styles.contacts_text1}>-Реклама-</div>
       <div className={styles.contacts_text2}>Менеджер Елена: +375294545468</div>
       <div className={styles.contacts_text3}>-Сотрудничество-</div>
       <div className={styles.contacts_text4}>Менеджер Валентин: +375294545468</div>
       <div className={styles.contacts_text5}>-Для физ. лиц-</div>
       <div className={styles.contacts_text6}>
        call-центр: +37529131811<br></br>
        почта: rubish@gmail.com<br></br>
        instagram<br></br>
        facebook<br></br>
        youtube<br></br>
        wechat 
    </div>
       </div>
       <img src={art} className="art" alt=''/> 
       </div>

  )
}

export default Contacts