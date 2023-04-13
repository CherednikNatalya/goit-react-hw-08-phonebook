import {createSlice} from '@reduxjs/toolkit'
import { register, logIn, logOut, refreshUser } from './operations';
import authOperations from './operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    // isRefreshing: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [authOperations.register.fulfield](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfield](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    }
   
          
    },
)