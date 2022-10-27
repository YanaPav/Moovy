import { configureStore } from '@reduxjs/toolkit'
import { searchMoviesApi } from './slices/searchMoviesSlice'
import { filterValuesReducer } from './slices/filterValuesSlice'
import {ratedMoviesReducer} from './slices/ratedMoviesSlice'


export const store = configureStore({
  reducer: {
    [searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
    filterValues: filterValuesReducer,
    ratedMovies: ratedMoviesReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchMoviesApi.middleware),
})