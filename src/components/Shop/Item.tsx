import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {clothing} from '../../assets/shop/shop'
import styles from '../../styles/Shop.module.scss'
import HeaderShop from './HeaderShop'
import classNames from 'classnames'

type Clothing = {
  id:number,
  sale:boolean,
  gender:string,
  image:string,
  name:string,
  type:string,
  cost:number,
  withSale?:number,
  amount:boolean,
  size:Array<string>
}

const Item = () => {
  const location = useLocation()
  const wear = clothing.filter((item:Clothing) => item.id === location.state)
  const [selectSize,setSelectSize] = useState<string>('L')

  console.log(selectSize)

  return (
    <div className={styles.shop}>
      <div className={styles.row}>
      <HeaderShop/>
        <div className={styles.wear}>
            {wear.map((item) => (
            <div className={styles.wear_row}>
              <div className={styles.wear_image}>
                <img src={wear[0].image} alt='wear'/>
              </div>
              <div className={styles.wear_info}>
                  <h1>{item.name}</h1>
                  <p>{item.type}</p>
                  <p>код товара:<br/>
                    1F30114001-WHI
                  </p>
                  <p className={styles.info_amount}>
                    {item.amount ? 
                    <div className={styles.info_am}>
                      <div className={styles.checkbox_green}></div>
                      <p>Доступно в шоуруме</p>
                    </div> : 
                    <div className={styles.info_am}>
                      <div className={styles.checkbox_red}></div>
                      <p>Недоступно в шоуруме</p>
                    </div>}
                  </p>
                  <p className={styles.info_cost}>{item.cost} руб.</p>
                  <div className={styles.info_size}>
                    {item.size.map((item,idx) => (
                      <div key={idx}>
                        <button className={classNames(styles.info_size_button,{[styles.info_size_button_active]:item === selectSize})}  onClick={() => (setSelectSize(item)) }>{item}</button>
                      </div>
                    ))}
                  </div>
                  <button className={styles.info_buy}>Добавить в корзину</button>
              </div>
            </div>  
            ))}
        </div>
      </div>
    </div>
  )
}

export default Item
