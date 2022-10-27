import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '5d2eed6b'

export const searchMoviesApi = createApi({
  reducerPath: 'searchMoviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://www.omdbapi.com/` }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query({
        query: ({ title, page }) => `?type=movie&apikey=${API_KEY}&s=${title}&page=${page}`,
        providesTags: (id) => [{ type: 'moviesByTitle', id }]
    }),
  }),
})

export const { useGetMoviesByTitleQuery } = searchMoviesApi