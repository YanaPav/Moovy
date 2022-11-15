import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, baseUrl} from '../apiVariables'

// 
export const searchMoviesApi = createApi({
  reducerPath: 'searchMoviesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query({
        query: ({ title, releaseYear, page = 1 }) => `?type=movie&apikey=${API_KEY}&s=${title}&page=${page}&y=${releaseYear}`,
        providesTags: (id) => [{ type: 'moviesByTitle', id }]
    }),
  }),
})

export const { useGetMoviesByTitleQuery } = searchMoviesApi