import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchPage } from '../Pages/SearchPage/SearchPage';
import { NavBar } from '../components/NavBar/NavBar';

const RatedMoviesPage = lazy(() =>
  import('../Pages/RatedMoviesPage/RatedMoviesPage')
);
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetailsPage/MovieDetailsPage')
);
const PageNotFound = lazy(() => import('../Pages/PageNotFound/PageNotFound'));

export const App = () => {
  console.log(RatedMoviesPage);
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
