import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        topMovieId:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying = action.payload;
        },
        addTopTrailerMovieId:(state,action)=>{
            state.topMovieId = action.payload;
        }
    }
})

export const {addNowPlaying,addTopTrailerMovieId} = moviesSlice.actions;
export default moviesSlice.reducer;