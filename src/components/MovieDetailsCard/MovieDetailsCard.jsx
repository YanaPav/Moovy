// react
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// libraries
import { Container, Rating } from '@mui/material';
// redux-components
import { useGetMovieByIdQuery } from 'redux/slices/getMovieDetailsSlice';
import { selectRatedMovies } from 'redux/selectors';
import { addRatedMovie, removeRatedMovie } from 'redux/slices/ratedMoviesSlice';
// components
import noPoster from 'images/noPoster.jpg';
import { RatingWrap } from './MovieDetailsCard.styled';

//
export const MovieDetailsCard = () => {
  const { movieId } = useParams();
  const { data } = useGetMovieByIdQuery(movieId);
  const ratedMovies = useSelector(selectRatedMovies);
  const [rating, setRating] = useState(isAlredyRated() ?? 0);
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
            <b>imdbRating:&nbsp;</b>
            {data.imdbRating}
          </p>
        )}

        {data.Plot !== 'N/A' && <p>{data.Plot}</p>}

        <RatingWrap>
          <b>My rating:</b>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
          />
        </RatingWrap>
      </div>
    </Container>
  );
};
