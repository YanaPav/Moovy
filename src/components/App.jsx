import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchPage } from '../Pages/SearchPage/SearchPage';
import { RatedMoviesPage } from '../Pages/RatedMoviesPage/RatedMoviesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/rated" element={<RatedMoviesPage />} />
      </Routes>
      <CssBaseline />
    </>
  );
};
