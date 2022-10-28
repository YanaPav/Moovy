import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import noMoviesPoster from '../../noMoviesPoster.png';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export const RatedMoviesPage = () => {
  const ratedMovies = useSelector(state => state.ratedMovies);
  const isRatedMovies = ratedMovies.length > 0;
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 10 }}>
      {!isRatedMovies && (
        <>
          <p>There are no rated movies yeat :(</p>
          <img src={noMoviesPoster} alt="popcorn" width="500" />
        </>
      )}

      {isRatedMovies && (
        <ul>
          {ratedMovies.map(({ Poster, Title, Year, imdbID, rating, Genre }) => (
            <MovieCard
              key={imdbID}
              poster={Poster}
              year={Year}
              title={Title}
              id={imdbID}
              startRating={rating}
              genre={Genre}
            />
          ))}
        </ul>
      )}
    </Container>
  );
};
