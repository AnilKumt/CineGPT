import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user";
import movieReducer from "./movies";
import gptReducer from "./gptSearch";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        allMovies:movieReducer,
        gptSearch:gptReducer
    }
})

export default appStore;