import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        allMovies:null,
        topMovieId:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.allMovies = action.payload;
        },
        addTopTrailerMovieId:(state,action)=>{
            state.topMovieId = action.payload;
        }
    }
})

export const {addMovies,addTopTrailerMovieId} = moviesSlice.actions;
export default moviesSlice.reducer;