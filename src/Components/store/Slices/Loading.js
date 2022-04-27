import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = new createSlice({
    name: "Loading", 
    initialState: {
        globalLoading: true,
        localLoading:true,      
    }, 
    reducers: {
        setGlobalLoader:(state, actions)=> {
            state.globalLoading = actions.payload
        },
        setLocalLoader: (state, actions) => {
            state.localLoading=actions.payload
        }
    }
    
})
export const {setGlobalLoader, setLocalLoader} = LoadingSlice.actions;

