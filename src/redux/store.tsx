import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import { shopReducer,userReducer,servicesReducer } from "../ducks/shop/shop-slice";

export const store = configureStore({
    reducer:{
        shop:shopReducer,
        user:userReducer,
        services:servicesReducer,
    }
})

setupListeners(store.dispatch)
