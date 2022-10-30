// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchPage } from '../Pages/SearchPage/SearchPage';
import { RatedMoviesPage } from '../Pages/RatedMoviesPage/RatedMoviesPage';
import { NavBar } from '../components/NavBar/NavBar';
import { PageNotFound } from '../Pages/PageNotFound/PageNotFound';
import { MovieDetailsPage } from '../Pages/MovieDetailsPage/MovieDetailsPage';

// const RatedMoviesPage = lazy(() =>
//   import('../Pages/RatedMoviesPage/RatedMoviesPage')
// );

// const MovieDetailsPage = lazy(() =>
//   import('../Pages/MovieDetailsPage/MovieDetailsPage')
// );

// const PageNotFound = lazy(() =>
//   import('../components/PageNotFound/PageNotFound')
// );

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<SearchPage />} />
          <Route path="rated" element={<RatedMoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <CssBaseline />
    </>
  );
};
