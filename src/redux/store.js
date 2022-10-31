import { configureStore } from '@reduxjs/toolkit'
import { searchMoviesApi } from './slices/searchMoviesSlice'
import {getMovieDetailsApi} from './slices/getMovieDetailsSlice'
import {ratedMoviesReducer} from './slices/ratedMoviesSlice'


export const store = configureStore({
  reducer: {
    [searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
    [getMovieDetailsApi.reducerPath]: getMovieDetailsApi.reducer,
    ratedMovies: ratedMoviesReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchMoviesApi.middleware, getMovieDetailsApi.middleware),
})