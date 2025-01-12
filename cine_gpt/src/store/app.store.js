import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice/user";
const appStore = configureStore({
    reducer:{
        user:userReducer,
    }
})

export default appStore;