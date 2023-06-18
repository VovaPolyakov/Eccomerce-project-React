import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/NavBar.module.scss'
import {links} from '../../assets/links/index'
import { signOut,getAuth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { userActions } from '../../ducks/shop/shop-slice'
import { useSelector } from 'react-redux'


const NavBar = () => {

  

  const dispatch = useDispatch()
  const items = useSelector((state:any) => state.user);
  console.log(items.data.length === 0)

  const handleSignOut = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      const auth = getAuth();
      const userCredentials = await signOut(auth)
      dispatch(userActions.deleteUser(userCredentials))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.nav}>
      <div className={styles.nav_row}>
        <ul className={styles.nav_menu}>
          {links.map((link) => (
            <li className={styles.nav_link} key={link.name}><Link to={link.link}>{link.name}</Link></li>
          ))}
          {items.data.length !== 0 ? 
            <Link to='/accept'><button className={styles.nav_button}>Aккаунт</button></Link>
            :
            <Link to='/login'><button className={styles.nav_button}>Войти</button></Link>
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBar
