import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user";
import movieReducer from "./movies";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        allMovies:movieReducer,
    }
})

export default appStore;