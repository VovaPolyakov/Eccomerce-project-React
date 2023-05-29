import React from "react";
import { Routes ,Route } from 'react-router-dom';
// const About = React.lazy(() => import('../About/About'));
import About from "../About/About";

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
<<<<<<< HEAD
        <Route path='/shop'/>
=======
        <Route path='/shop' element={<Shop/>}/>
>>>>>>> 76002b9618ff1b2b97099f3f9b88d7c1688bb8f3
    </Routes>
  )
}

export default Main
