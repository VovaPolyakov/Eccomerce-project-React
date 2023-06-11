import {configureStore} from '@reduxjs/toolkit'
import { shopReducer} from '../ducks/shop/shop-slice';

export const store = configureStore({
    reducer:{
        shop:shopReducer,
    },
});

