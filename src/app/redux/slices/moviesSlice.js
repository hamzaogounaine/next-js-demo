import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = 'dd725b5608d426a3acd5a0b97d09f4ba'

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    console.log(response)
    const data = await response.data;
    return data.results;
})
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status : 'idle',
        error : null
    },  
    reducers: {
        // setMovies: (state, action) => {
        //     state.movies = action.payload;
        // }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.status = 'succeeded';
        })
        .addCase(fetchMovies.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMovies.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default movieSlice;

export { fetchMovies };