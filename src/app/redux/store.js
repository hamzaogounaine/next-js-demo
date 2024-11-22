import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/moviesSlice";



export const store = configureStore({
    reducer: {
        movies : movieSlice.reducer
    }
})