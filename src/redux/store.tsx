import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { shopReducer,userReducer } from "../ducks/shop/shop-slice";

export const store = configureStore({
    reducer:{
        shop:shopReducer,
        user:userReducer,
    }
})

setupListeners(store.dispatch)
