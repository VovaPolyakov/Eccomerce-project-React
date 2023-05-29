import React from "react";
import { Routes ,Route } from 'react-router-dom';
// const About = React.lazy(() => import('../About/About'));
import About from "../About/About";
import Concept from "../Concept/Concept";
import Contacts from "../Contacts/Contacts";
import Shop from "../Shop/Shop";
import Socialvalue from '../Socialvalue/Socialvalue';
import Services from '../Services/Services';

const Main = () => {
  return (
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/concept' element={<Concept/>}/>
        <Route path='/sorting'/>
        <Route path='/map'/>
        <Route path='/social-value' element={<Socialvalue/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/> 
        <Route path='/shop' element={<Shop/>}/>
    </Routes>
  )
}

export default Main
