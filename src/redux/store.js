import { configureStore } from "@reduxjs/toolkit";

import userReducer from './userSlise'

const store = configureStore({
    reducer:{
        userState:userReducer,
    }
})

export default store;