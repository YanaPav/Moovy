import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Box, Container, ListItem, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { GenreFilter } from 'components/GenreFilter/GenreFilter';
import { NoRatedMovies } from 'components/NoRatedMovies/NoRatedMovies';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';

const RatedMoviesPage = () => {
  const ratedMovies = useSelector(state => state.ratedMovies);
  const isRatedMovies = ratedMovies.length > 0;
  const [genreFilterValue, setGenreFilterValue] = useState('');
  const navigate = useNavigate();

  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  const handlerFilterChange = e => {
    setGenreFilterValue(e.currentTarget.value);
  };

  const filtredMovies = ratedMovies.filter(({ Genre }) =>
    Genre?.toLowerCase().includes(genreFilterValue.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 10, textAlign: 'center' }}>
      <Button
        variant="contained"
        size="small"
        startIcon={<ArrowBackIcon />}
        type="button"
        onClick={() => navigate(-1)}
        sx={{ height: '40px', marginRight: 'auto' }}
      >
        Go back
      </Button>

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
            {filtredMovies.map(({ Poster, Title, Year, imdbID, Genre }) => (
              <ListItem
                key={imdbID}
                sx={{ padding: '0', width: '350px', height: '650px' }}
              >
                <MovieCard
                  poster={Poster}
                  year={Year}
                  title={Title}
                  id={imdbID}
                  genre={Genre}
                />
              </ListItem>
            ))}
          </Box>
        </>
      )}
      <ScrollUp />
    </Container>
  );
};

export default RatedMoviesPage;
