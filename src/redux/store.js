import { configureStore } from '@reduxjs/toolkit'
import { searchMoviesApi } from './searchMoviesSlice'
import {filterValuesReducer} from './filterValuesSlice'


export const store = configureStore({
  reducer: {
    [searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
    filterValues: filterValuesReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchMoviesApi.middleware),
})