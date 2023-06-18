import {createSlice} from '@reduxjs/toolkit'

export const shopSlice = createSlice({
    name:'shop',
    initialState:{
        data:[]
    },
    reducers:{
        addItem: (state:any,action) => {
            state.data.push(action.payload)
        },
        removeItem: (state,action) => {
            state.data = state.data.filter((item:any) => item.id !== action.payload.id)
        }
    }
})
export const userSlice = createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{
        addUser: (state:any,action) => {
            console.log(action.payload)
            state.data.push(action.payload)
        },
        deleteUser: (state,action) => {
            state.data = []
        }
    }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer


export const shopActions = shopSlice.actions;
export const shopReducer = shopSlice.reducer