import React from 'react'
import styles from '../../styles/Footer.module.scss'
import footer_logo from '../../assets/images/footer_logo.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_row}>
            <div className={styles.footer_logo}>
              <img alt='footer_logo' src={footer_logo}></img>
            </div>
            <div className={styles.footer_info}>
              <p>почта: rubish@gmail.com</p>
              <p>instagram</p>
              <p>facebook</p>
              <p>youtube</p>
              <p>wechat</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
