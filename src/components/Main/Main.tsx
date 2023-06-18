import React from "react";
import { Routes ,Route } from 'react-router-dom';
// const About = React.lazy(() => import('../About/About'));
import About from "../About/About";
import Concept from "../Concept/Concept";
import Contacts from "../Contacts/Contacts";
import Shop from "../Shop/Shop";
import Socialvalue from '../Socialvalue/Socialvalue';
import Services from '../Services/Services';
import Continue from "../Services/Continue";
import Done from '../Services/Done';
import Women from '../Shop/Women'
import Sale from '../Shop/Sale'
import Men from "../Shop/Men";
import Item from "../Shop/Item";
import Login from '../Login/Login'
import Singup from "../Login/Singup";
import Map from '../Map/Mapa'
import Sort from "../Sort/Sort";
import Cart from "../Cart/Cart";
import Accept from "../Login/Accept";

const Main = () => {
  return (
    <Routes>
        <Route path='/accept' element={<Accept/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/sorting' element={<Sort/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/concept' element={<Concept/>}/>
        <Route path='/sorting'/>
        <Route path='/map'/>
        <Route path='/social-value' element={<Socialvalue/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/> 
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/services/continue' element={<Continue/>}/>
        <Route path='/services/continue/done' element={<Done/>}/>
        <Route path='/shop/men' element={<Men/>}/>
        <Route path='/shop/women' element={<Women/>}/>
        <Route path='/shop/sale' element={<Sale/>}/>
        <Route path='/shop/:gender/:id' element={<Item/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
    </Routes>
  )
}

export default Main
