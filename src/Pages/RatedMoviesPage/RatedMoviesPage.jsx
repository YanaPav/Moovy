import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { GenreFilter } from '../../components/GenreFilter/GenreFilter';
import { NoRatedMovies } from '../../components/NoRatedMovies/NoRatedMovies';

export const RatedMoviesPage = () => {
  const ratedMovies = useSelector(state => state.ratedMovies);
  const isRatedMovies = ratedMovies.length > 0;
  const [genreFilterValue, setGenreFilterValue] = useState('');

  const handlerFilterChange = e => {
    setGenreFilterValue(e.currentTarget.value);
  };

  const filtredMovies = ratedMovies.filter(({ Genre }) =>
    Genre.toLowerCase().includes(genreFilterValue.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 10, textAlign: 'center' }}>
      {!isRatedMovies && <NoRatedMovies />}

      {isRatedMovies && (
        <>
          <GenreFilter
            value={genreFilterValue}
            onChange={handlerFilterChange}
          />

          {filtredMovies.length === 0 && (
            <p>There are no movies in the "{genreFilterValue}" genre</p>
          )}

          <Box
            component="ul"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              padding: 0,
            }}
          >
            {filtredMovies.map(
              ({ Poster, Title, Year, imdbID, rating, Genre }) => (
                <MovieCard
                  key={imdbID}
                  poster={Poster}
                  year={Year}
                  title={Title}
                  id={imdbID}
                  genre={Genre}
                />
              )
            )}
          </Box>
        </>
      )}
    </Container>
  );
};
