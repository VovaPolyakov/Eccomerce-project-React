import React from 'react'
import styles from '../../styles/Shop.module.scss'
import { Link} from 'react-router-dom'
import Default from './Default'
import Main from '../Main/Main'
import HeaderShop from './HeaderShop'

const Shop = () => {
  return (
      <div className={styles.shop}>
          <div className={styles.row}>
              <HeaderShop/>
              <div>
                <Default/>
                <Main/>
              </div>
          </div>
      </div>
  )
}

export default Shop
