import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetMovieByIdQuery } from '../../redux/slices/getMovieDetailsSlice';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import {
  addRatedMovie,
  removeRatedMovie,
} from '../../redux/slices/ratedMoviesSlice';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const ratedMovies = useSelector(state => state.ratedMovies);
  const [rating, setRating] = useState(isAlredyRated() ?? 0);
  const { data } = useGetMovieByIdQuery(movieId);
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

  if (!data) return;

  const {
    Poster,
    Title,
    Actors,
    Genre,
    Plot,
    Year,
    imdbRating,
    Director,
    Country,
  } = data;

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <img src={Poster} alt={Title} />
      <h2>
        {Title} ({Year})
      </h2>
      <p>
        <b>Genre:</b> {Genre}
      </p>
      <p>
        <b>Director:</b> {Director}
      </p>
      <p>
        <b>Actors:</b> {Actors}
      </p>
      <p>
        <b>Country:</b> {Country}
      </p>
      <p>
        <b>imdbRating:</b> {imdbRating}
      </p>
      <p>{Plot}</p>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
    </Container>
  );
};
