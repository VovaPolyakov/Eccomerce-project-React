import React from 'react'
import fish from '../../assets/images/fish.png'
import styles from '../../styles/Socialvalue.module.scss'
const Socialvalue = () => {
  return (
<div className={styles.socialvalue}>
<div className={styles.socialvalue_text}>
Каждый год на нашей планете производится более <b>2 миллиардов</b> тонн твердых отходов. А эксперты прогнозируют, что уже <b>к 2050</b> году эта цифра увеличится на 70%. Другими словами, можно сказать, что нашей планете просто грозит перспектива <b>превратиться</b> в огромную свалку… Не лучшая перспектива, правда?
</div>
<img src={fish} className="fish" alt=''/> 
</div>
  )
}

export default Socialvalue
