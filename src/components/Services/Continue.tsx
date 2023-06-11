
import fulltrash from '../../assets/images/fulltrash.png'
import styles from '../../styles/Continue.module.scss'
import Form from './Form'

const Continue = () => {
  return (
    <div className={styles.continue}>
    <div className={styles.block3}>
    <div className={styles.block3_text}>
        <div className={styles.b3_t1}><b>Вывезем</b> ваш мусор и <b>отсортируем</b></div>
        <div className={styles.b3_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
        <div className={styles.form}>
          <Form/>
        </div>
    </div>
    <img src={fulltrash} className="trash" alt=''/> 
    </div>
    
    </div>
    
  )
}

export default Continue
