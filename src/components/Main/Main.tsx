import React from "react";
import { Routes ,Route } from 'react-router-dom';
// const About = React.lazy(() => import('../About/About'));
import About from "../About/About";
import Concept from "../Concept/Concept"
import Contacts from "../Contacts/Contacts"

const Main = () => {
  return (
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/concept' element={<Concept/>}/>
        <Route path='/sorting'/>
        <Route path='/map'/>
        <Route path='/socia-lvalue'/>
        <Route path='/services'/>
        <Route path='/contacts' element={<Contacts/>}/> 
        <Route path='/shop'/>
    </Routes>
  )
}

export default Main
