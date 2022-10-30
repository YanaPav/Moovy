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
import noPoster from '../../images/noPoster.jpg';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GoBackLink } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const ratedMovies = useSelector(state => state.ratedMovies);
  const [rating, setRating] = useState(isAlredyRated() ?? 0);
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);
  const dispatch = useDispatch();
  const location = useLocation();

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
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <GoBackLink to={location.state?.from || '/'}>
          <ArrowBackIcon sx={{ marginRight: '4px' }} />
          Go back
        </GoBackLink>
      </Container>

      {isLoading && <LinearProgress sx={{ marginTop: '14px' }} />}

      {error && (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <p>Something goes wrong :( Try again later.</p>
          {/* Real error {error.data.Error} */}
        </Container>
      )}

      {data?.Error && (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <p>{data.Error}</p>
        </Container>
      )}

      {data && !data.Error && (
        <Container
          maxWidth="lg"
          sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'start',
            gap: 4,
          }}
        >
          <img
            src={data.Poster === 'N/A' ? noPoster : data.Poster}
            alt={data.Title}
          />
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
              <b>Actors:</b> {data.Actors !== 'N/A' && data.Actors}
            </p>
            <p>
              <b>Country:</b> {data.Country}
            </p>
            {data.imdbRating !== 'N/A' && (
              <p>
                <b>imdbRating:</b>
                {data.imdbRating}
              </p>
            )}

            {data.Plot !== 'N/A' && <p>{data.Plot}</p>}

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
