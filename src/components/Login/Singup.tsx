import React, { useState } from 'react'
import styles from '../../styles/Login.module.scss'
import {getAuth,signup} from '../../firebase'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../../ducks/shop/shop-slice'


const Singup = () => {
  const [login,setLogin] = useState<string>('')
  const [password,setPassword] = useState<string>('')

  const handleSubmit = async (e:React.MouseEvent<HTMLElement>) => {
    try {
      const auth = getAuth();
      const userCredentials =  await signup(auth,login,password)
      console.log({userCredentials})
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className={styles.signup}>
      <div className={styles.signup_form}>
        <form>
          <h1>Регистрация</h1>
          <div className={styles.form_inputs}>
            <div className={styles.form_input}>
              <p><span>Почта</span></p>
              <input onChange={(e) => {setLogin(e.target.value)}} placeholder='Почта' type='email' required/>
            </div>
            <div className={styles.form_input}>
              <span>Имя</span>
              <input placeholder='Имя'type='text' required/>
            </div>
            <div className={styles.form_input}>
              <p>Придумайте <span>пароль</span></p>
              <input onChange={(e) => {setPassword(e.target.value)}} placeholder='Пароль' type='password' required/>
            </div>
            <div className={styles.form_input}>
              <span>Фамилия</span>  
              <input placeholder='Фамилия' type='text' required/>
            </div>
          </div>
          <div className={styles.form_checkbox}>
            <input type='checkbox' required/>
            <p>Я <span>принимаю</span> политику компании (<span>обязательно</span>)</p>
          </div>
          <div className={styles.form_checkbox}>
            <input type='checkbox' required/>
            <p>Я <span>согласен</span> на приход уведомлений</p>
          </div>
          <Link to='/login'><button onClick={handleSubmit} type='submit'>Регистрация</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Singup
