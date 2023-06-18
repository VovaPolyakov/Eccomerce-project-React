import React from 'react'
import styles from '../../styles/Login.module.scss'
import { useSelector } from 'react-redux';

const Accept = () => {
  
  const items:any = useSelector((state:any) => state);


  const shop = useSelector((state:any) => state.shop.data)



  console.log(items.user.data[0]?.userCredentials.user.email)
  
  return (
  <div className={styles.accept}>
       {items.user.data.length === 0 ? '' : 
          <div className={styles.accept_row}>   <h1>Добрый день, Владимир!</h1>
              <p>E-MAIL:{items.user.data[0]?.userCredentials.user.email}</p>
              <p>телефон: +375293459876</p>
              <h2>Ваши заказы</h2>
              <div className={styles.orders}>
                <div className={styles.services}>
                  <p>Услуги</p>
                  {items.services.data.length === 0 ? <div className={styles.shop_notfound}>Отсутствуют</div>
                  :   
                  <div className={styles.services_info}>
                    <div className={styles.services_info_cost}>ЦЕНА:<span>{items.services.data[0].cost}</span> руб.</div>
                    <div className={styles.services_info_street}>{items.services.data[0].address}</div>
                    <div className={styles.services_info_courier}>Курьер в пути</div>
                  </div>
                  }

                </div>
                <div className={styles.shop}>
                  <p>Магазин</p>
                  {items.shop.data.length === 0 ? <div className={styles.shop_notfound}>Отсутствуют</div> :
                      <div className={styles.shop_info}>
                        <div className={styles.shop_info_cost}>ЦЕНА:<span>{items.shop.data[0].wear.cost}</span> руб.</div>
                        <div className={styles.shop_info_name}>{items.shop.data[0].wear.name}</div>
                        <div className={styles.shop_info_type}>{items.shop.data[0].wear.type}</div>
                      </div>
                  }
                </div>
              </div>
          </div>
        } 
  </div>
  )
}

export default Accept
