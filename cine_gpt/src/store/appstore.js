import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user";
import movieReducer from "./movies";
import gptReducer from "./gptSearch";
import langReducer from "./langConfig"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        allMovies:movieReducer,
        gptSearch:gptReducer,
        langPrefered:langReducer
    }
});

export default appStore;