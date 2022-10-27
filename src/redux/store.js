import { configureStore } from '@reduxjs/toolkit'
import { searchMoviesApi } from './searchMoviesSlice'


export const store = configureStore({
  reducer: {
    [searchMoviesApi.reducerPath]: searchMoviesApi.reducer,
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchMoviesApi.middleware),
})