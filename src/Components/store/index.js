import { configureStore } from "@reduxjs/toolkit";
import { LoadingSlice } from "./Slices/Loading";
export const store = new configureStore({
    reducer: {
        loader:LoadingSlice.reducer
    }

})
