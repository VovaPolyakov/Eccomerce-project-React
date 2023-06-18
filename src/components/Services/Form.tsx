import styles from '../../styles/Continue.module.scss'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { servicesActions } from '../../ducks/shop/shop-slice';

export default function Form({onChange}:any) {
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch()
    const handleChange = (e: any) => {
    if (e.target.name === 'address') {
      setAddress(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }}

    const handleAddServices = () => {
      dispatch(servicesActions.addServices({address,number,cost:4.50}))
    }
    return (
      <form>
        
      <input className={styles.form1} type='address' placeholder="Ваш адрес" name='address' value={address} onChange={handleChange}/>
      <input className={styles.form2} type='phone' placeholder="Номер телефона" name='number' value={number} onChange={handleChange}/>
          
      <Link onClick={handleAddServices} to='/services/continue/done' state={{address, number}}>
        <button className={styles.button3}>Оформить</button>
      </Link> 
      </form>
    );
  }