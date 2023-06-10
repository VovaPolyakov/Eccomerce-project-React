import React from 'react'
import styles from './Default.module.scss'
import eco_friendly from '../../assets/images/eco-friendly.png'
import RF from '../../assets/images/R F.png'
import jac from '../../assets/images/jac.png'
import stussy from '../../assets/images/stussy.png'
import cold from '../../assets/images/cold.png'
import map from '../../assets/images/map.png'
import shop from '../../assets/images/shop.png'
import arrow from '../../assets/images/arrow.png'
import sale_bg from '../../assets/images/sale_bg.png'
import sale from '../../assets/images/sale 30%.png'
import { Link } from 'react-router-dom'

const Default = () => {
  return (
    <div className={styles.default}>
        <div className={styles.default_blocks}>
            <div className={styles.default_block_top}>
                <div className={styles.block_info}>
                    <div className={styles.block_eco}>
                        <img alt='eco' src={eco_friendly}></img>
                        <p>Первый в Беларуси магазин c эко-фрэндли вещами</p>
                    </div>
                    <div className={styles.block_rf}>
                        <img alt='rf' src={RF}></img>
                    </div>
                </div>
                <div className={styles.block_brand}>
                    <img alt='stussy' src={stussy}></img>
                    <img alt='jac' src={jac}></img>
                    <img alt='cold' src={cold}></img>
                </div>
            </div>
            <div className={styles.default_block_bottom}>
                <div className={styles.left_info}>
                    <img src={map} alt='map' className={styles.bottom_map}></img>
                    <img src={shop} alt='shop' className={styles.bottom_shop}></img>
                    <div className={styles.bottom_info}>
                        <div className={styles.info_street}>
                            <p>ул. Богдановича 13</p>
                        </div>
                        <div className={styles.info_network}>
                            <span>Флагманский шоурум</span>
                            <p>
                                10:00-21:00
                            </p>
                            <span>Контакт</span>
                            <p>+375292234567</p>
                            <p>instagram</p>
                            <p>youtube</p>
                        </div>
                    </div>
                    <div className={styles.bottom_showroom}>
                        <div className={styles.showroom_rf}>
                            <img src={RF} alt='rf'></img>
                        </div>
                        <div className={styles.showroom}>
                            <p>Шоурум</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right_sale}>
                    <div>
                        <img src={sale} alt='sale'></img>
                    </div>
                    <button>
                        <Link to='/shop/sale'>
                            <img src={arrow} alt='arrow'></img>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Default
