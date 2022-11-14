import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { NavBar } from 'components/NavBar/NavBar';

const RatedMoviesPage = lazy(() =>
  import('pages/RatedMoviesPage/RatedMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

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
