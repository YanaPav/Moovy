import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '5d2eed6b'

export const getMovieDetailsApi  = createApi({
  reducerPath: 'getMovieDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://www.omdbapi.com/` }),
  endpoints: (builder) => ({
    getMovieById: builder.query({
      query: (imdbID) => `?apikey=${API_KEY}&i=${imdbID}&plot=full`,
      providesTags: (id) => [{ type: 'movieDetails', id }]
    }),
  }),
})

export const { useGetMovieByIdQuery } = getMovieDetailsApi