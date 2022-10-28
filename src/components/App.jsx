import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchPage } from '../Pages/SearchPage/SearchPage';
import { RatedMoviesPage } from '../Pages/RatedMoviesPage/RatedMoviesPage';
import { NavBar } from '../components/NavBar/NavBar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<SearchPage />} />
          <Route path="rated" element={<RatedMoviesPage />} />
        </Route>
      </Routes>
      <CssBaseline />
    </>
  );
};
