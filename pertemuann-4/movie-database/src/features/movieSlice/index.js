// Import createSlice: untuk membuat slice
const { createSlice } = require("@reduxjs/toolkit");
const { default : data } = require("../../utils/constants/data");

/**
 * Buat slice: untuk generate action dan reducers
 * Params object: name, initialState, reducers
 */

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

// generate action dan reducers
const moviesReducer = movieSlice.reducer;
const { addMovie, updateMovies } = movieSlice.actions;

// Export reducer dan actions
export default moviesReducer;
export { addMovie, updateMovies };