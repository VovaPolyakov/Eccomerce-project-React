import React from "react";
import { Routes ,Route } from 'react-router-dom';
// const About = React.lazy(() => import('../About/About'));
import About from "../About/About";

const Main = () => {
  return (
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/concept'/>
        <Route path='/sorting'/>
        <Route path='/map'/>
        <Route path='/socia-lvalue'/>
        <Route path='/services'/>
        <Route path='/contacts'/> 
        <Route path='/shop'/>
    </Routes>
  )
}

export default Main
