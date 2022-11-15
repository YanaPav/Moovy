import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_KEY, baseUrl} from '../apiVariables'

// 
export const getMovieDetailsApi  = createApi({
  reducerPath: 'getMovieDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (imdbID) => `?apikey=${API_KEY}&i=${imdbID}&plot=full`,
      providesTags: (id) => [{ type: 'movieDetails', id }]
    }),
  }),
})

export const { useGetMovieByIdQuery } = getMovieDetailsApi