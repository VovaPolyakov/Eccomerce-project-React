import React from 'react'
import art from '../../assets/images/art.png'
import logo from './img/logo.png'
import styles from '../../styles/Map.module.scss'

import { YMaps, Map, Placemark,  ObjectManager } from '@pbe/react-yandex-maps';
const Mapa= () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      <YMaps >
        <div className={styles.wrapperMap}>
          <Map className={styles.map} defaultState={{ center: [53.9, 27.56], zoom: 13 }}>
          <Placemark geometry={[53.9000000, 27.5666700]} options={{
            iconLayout: 'default#image',
            iconImageHref: logo,
            iconImageSize: [50, 25],
            }}/>
            <Placemark geometry={[53.9100000, 27.5266700]} options={{
            iconLayout: 'default#image',
            iconImageHref: logo,
            iconImageSize: [50, 25],
            }}/>
            <Placemark geometry={[53.9090000, 27.5866700]} options={{
            iconLayout: 'default#image',
            iconImageHref: logo,
            iconImageSize: [50, 25],
            }}/>
            <Placemark geometry={[53.8900000, 27.5266700]} options={{
            iconLayout: 'default#image',
            iconImageHref: logo,
            iconImageSize: [50, 25],
            }}/>

          </Map>
        </div>
      </YMaps>
      </div>


      <div className={styles.right}>

        <div className={styles.searchwrapp}>
          <input className={styles.input} type="text" placeholder='найти пункт...'/>
          <button className={styles.button}>Рядом со мной</button>
        </div>

        <div className={styles.bodymap}>
        <div className={styles.places}>
          <div className={styles.leftbg}>ул. Богдановича 11</div>
          <div className={styles.rightinf}>
            <h2>Банки + пункт приёма</h2>
            <p>8:00-19:00</p>
          </div>
        </div>
        <div className={styles.places}>
          <div className={styles.leftbg}>ул. Немига 3</div>
          <div className={styles.rightinf}>
            <h2>Банки + пункт приёма</h2>
            <p>8:00-19:00</p>
          </div>
        </div>
        <div className={styles.places}>
          <div className={styles.leftbg}>ул. Карастаянова 15</div>
          <div className={styles.rightinf}>
            <h2>Банки + пункт приёма</h2>
            <p>8:00-19:00</p>
          </div>
        </div>
        <div className={styles.places}>
          <div className={styles.leftbg}>ул. Гая 5</div>
          <div className={styles.rightinf}>
            <h2>Банки + пункт приёма</h2>
            <p>8:00-19:00</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
  
}

export default Mapa