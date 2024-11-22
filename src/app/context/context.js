import React, { createContext, useState } from 'react';
import { useContext } from 'react';

// Create the context
const MoviesContext = createContext();
const API_KEY = 'dd725b5608d426a3acd5a0b97d09f4ba'
const base_url = 'https://api.themoviedb.org/3/'
// Create a provider component
const MoviesProvider = ({ children }) => {
    const getTvShows = async () => {
        const response = await fetch(`${base_url}tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const data = await response.json()
        return data.results
    };

    const getTopRatedMovies = () => {
        return fetch(`${base_url}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => data.results);
    };

    return (
        <MoviesContext.Provider value={{ getTopRatedMovies , getTvShows }}>
            {children}
        </MoviesContext.Provider>
    );
};

export { MoviesContext, MoviesProvider };

export const useMovies = () => {
    return useContext(MoviesContext);
};