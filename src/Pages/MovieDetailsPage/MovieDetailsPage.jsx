import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetMovieByIdQuery } from '../../redux/slices/getMovieDetailsSlice';
import { useParams } from 'react-router-dom';
import { Rating, Box, LinearProgress } from '@mui/material';
import {
  addRatedMovie,
  removeRatedMovie,
} from '../../redux/slices/ratedMoviesSlice';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const ratedMovies = useSelector(state => state.ratedMovies);
  const [rating, setRating] = useState(isAlredyRated() ?? 0);
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rating !== null && rating !== 0) {
      dispatch(addRatedMovie({ ...data, rating: rating }));
      return;
    }
    if (rating === null) {
      dispatch(removeRatedMovie(data.imdbID));
    }
  }, [data, dispatch, rating]);

  function isAlredyRated() {
    let startRating = null;
    const alredyRatedMovie = ratedMovies.find(
      movie => movie.imdbID === movieId
    );

    if (alredyRatedMovie) {
      startRating = alredyRatedMovie.rating;
    }
    return startRating;
  }

  return (
    <>
      {isLoading && <LinearProgress sx={{ marginTop: '14px' }} />}

      {error && (
        <Container maxWidth="lg" sx={{ mt: 10, textAlign: 'center' }}>
          <p>Something goes wrong :( Try again later.</p>
          {/* Real error {error.data.Error} */}
        </Container>
      )}

      {data?.Error && (
        <Container maxWidth="lg" sx={{ mt: 10, textAlign: 'center' }}>
          <p>{data.Error}</p>
        </Container>
      )}

      {data && !data.Error && (
        <Container
          maxWidth="lg"
          sx={{
            mt: 12,
            display: 'flex',
            alignItems: 'start',
            gap: 4,
          }}
        >
          <img src={data.Poster} alt={data.Title} />
          <div>
            <h2 style={{ marginTop: 0 }}>
              {data.Title} ({data.Year})
            </h2>
            <p>
              <b>Genre:</b> {data.Genre}
            </p>
            <p>
              <b>Director:</b> {data.Director}
            </p>
            <p>
              <b>Actors:</b> {data.Actors}
            </p>
            <p>
              <b>Country:</b> {data.Country}
            </p>
            <p>
              <b>imdbRating:</b> {data.imdbRating}
            </p>
            <p>{data.Plot}</p>
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '4px 0',
              }}
            >
              <b>My rating:</b>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
              />
            </Box>
          </div>
        </Container>
      )}
    </>
  );
};
