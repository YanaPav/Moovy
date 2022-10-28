import { createSlice } from "@reduxjs/toolkit";

const ratedMoviesSlice = createSlice({
  name: "ratedMovies",
    initialState: [],
  reducers: {
    addRatedMovie(state, { payload }) {
      const alredyInState = state.some(movie => movie.imdbID === payload.imdbID)
      
      if (alredyInState) {  
        return state.map(movie => {              
          if (movie.imdbID === payload.imdbID) {
            return {...movie, rating: payload.rating }
          }
          return movie
        })
      }
      
    return [...state, payload]
    },
    removeRatedMovie(state, { payload }) {
      return state.filter(movie => movie.imdbID !== payload)
      },
    }
     
});

export const { addRatedMovie, removeRatedMovie } = ratedMoviesSlice.actions;
export const ratedMoviesReducer = ratedMoviesSlice.reducer