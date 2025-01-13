import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlaying:null,
        popular:null,
        topRated:null,
        upComing:null,
        topMovieId:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying = action.payload;
        },
        addPopular:(state,action)=>{
            state.popular = action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComing = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        },
        addTopTrailerMovieId:(state,action)=>{
            state.topMovieId = action.payload;
        }
    }
})

export const {addNowPlaying,addTopTrailerMovieId,addPopular,addTopRated,addUpComing} = moviesSlice.actions;
export default moviesSlice.reducer;