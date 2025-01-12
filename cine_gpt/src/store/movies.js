import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        allMovies:null,
        mainMovieId:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.allMovies = action.payload;
        }
    }
})

export const {addMovies} = moviesSlice.actions;
export default moviesSlice.reducer;