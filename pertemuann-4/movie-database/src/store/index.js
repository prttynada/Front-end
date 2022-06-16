// import configureStore: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

/**
 * membuat store: untuk state global
 * menerima param object: reducer
 * menyimpan slice yang sudah dibuat
 */

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        // reducer lainnya
    }
});

export default store;
