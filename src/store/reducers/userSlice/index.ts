import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";


interface IUser  {
    name: string,
    email: string,
    hashPassword: string,
    codCooperativa: string
}

const initialState: IUser = {
    name : '',
    email: '',
    hashPassword: '',
    codCooperativa: ''
}

export const userReducer = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setHashPassword: (state, action: PayloadAction<string>) => {
            state.hashPassword = action.payload
        },
        setCodCooperativa: (state, action: PayloadAction<string>) => {
            state.codCooperativa = action.payload
        },
    }
})


export const {setName, setEmail, setHashPassword, setCodCooperativa} = userReducer.actions

export default userReducer.reducer