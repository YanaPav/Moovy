// react
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// libraries
import CssBaseline from '@mui/material/CssBaseline';
// components
import { NavBar } from 'components/NavBar/NavBar';
// pages
import SearchPage from 'components/pages/SearchPage/SearchPage';
const RatedMoviesPage = lazy(() =>
  import('components/pages/RatedMoviesPage/RatedMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('components/pages/MovieDetailsPage/MovieDetailsPage')
);
const PageNotFound = lazy(() =>
  import('components/pages/PageNotFound/PageNotFound')
);

//
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
