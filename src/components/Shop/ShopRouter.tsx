import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Default from './Default';

const ShopRouter = () => {
  return (
    <Routes>
      <Route path='/shop/men'/>
      <Route path='/shop/women'/>
      <Route path='/shop/sale'/>
    </Routes>
  )
}

export default ShopRouter
