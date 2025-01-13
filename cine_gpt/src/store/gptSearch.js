import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:'gptSearch',
    initialState:{
        gptSearch:false,
    },
    reducers:{
        toggleGPTSearch:(state,action)=>{
            state.gptSearch = action.payload;
        }
    }
})

export const {toggleGPTSearch} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;