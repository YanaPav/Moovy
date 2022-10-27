import { createSlice } from "@reduxjs/toolkit";

const ratedMoviesSlice = createSlice({
  name: "ratedMovies",
    initialState: [],
  reducers: {
    addRatedMovie(state, { payload }) {
          const isInState = state.find(movie => movie.id === payload.id)

          if (isInState) {  
              return state.map(movie => {
                  if (movie.id === payload.id) {
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