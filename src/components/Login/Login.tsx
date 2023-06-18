import React,{useState} from 'react'
import styles from '../../styles/Login.module.scss'
import whiteflag from '../../assets/images/whiteflag.jpg'
import { Link } from 'react-router-dom'
import {getAuth,signin} from '../../firebase'
import { useDispatch } from 'react-redux'
import { userActions } from '../../ducks/shop/shop-slice'

const Login = () => {
  const [login,setLogin] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [error,setError] = useState()
  const dispatch = useDispatch()

  const handleSubmit = async (e:React.MouseEvent<HTMLElement>) => {
    try {
      const auth = getAuth();
      const userCredentials =  await signin(auth,login,password)
      dispatch(userActions.addUser({userCredentials}))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.login}>
      <div className={styles.login_row}>
          <div className={styles.login_form}>
              <form>
                <h1>Вход</h1>
                <p>Почта</p>
                <input className={styles.form_login} onChange={(e) => {setLogin(e.target.value)}} placeholder='Почта' type='email' required></input>
                <p>Пароль</p>
                <input className={styles.form_pass} onChange={(e) => {setPassword(e.target.value)}} placeholder='Пароль' type='password' required></input>
                <Link to='/accept' onClick={handleSubmit}><button className={styles.form_submit}  type='submit'>Войти</button></Link>
              </form>
              <p className={styles.login_forgot}>Нет аккаунта? <Link to='/signup'>Зарегистрируйся</Link></p>
          </div>
          <div className={styles.image}>
            <img src={whiteflag} alt='whiteflag'/>
          </div>
      </div>
    </div>
  )
}

export default Login
