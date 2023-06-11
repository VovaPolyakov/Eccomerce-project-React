import { createSlice } from "@reduxjs/toolkit";


export const shopSlice = createSlice({
    name:'shop',
    initialState:{
        data:[]
    },
    reducers:{

    }

})


export const shopActions = shopSlice.actions;
export const shopReducer = shopSlice.reducer