import styles from '../../styles/Continue.module.scss'
import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function Form({onChange}:any) {
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const handleChange = (e: any) => {
    if (e.target.name === 'address') {
      setAddress(e.target.value);
      onChange(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
      onChange(e.target.value);
    }}
    return (
      <form>
        
      <input className={styles.form1} placeholder="Ваш адрес" name='address' value={address} onChange={handleChange}/>
      <input className={styles.form2} placeholder="Номер телефона" name='number' value={number} onChange={handleChange}/>
          
      <Link to='/done' state={{address, number}}><button className={styles.button3}>Оформить
              </button></Link> 
      </form>
    );
  }