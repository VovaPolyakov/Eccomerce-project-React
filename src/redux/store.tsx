import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { shopReducer } from "../ducks/shop/shop-slice";

export const store = configureStore({
    reducer:{
        shop:shopReducer
    }
})

setupListeners(store.dispatch)
