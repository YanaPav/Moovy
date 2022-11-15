// react
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// libraries
import { CardContent, Typography } from '@mui/material';
// redux-components
import { addRatedMovie, removeRatedMovie } from 'redux/slices/ratedMoviesSlice';
import { useGetMovieByIdQuery } from 'redux/slices/getMovieDetailsSlice';
import { selectRatedMovies } from 'redux/selectors';
// components
import { StyledRating, StyledCardMedia, StyledCard } from './MovieCard.styled';
import noPoster from 'images/noPoster.jpg';

//
export const MovieCard = ({ poster, title, year, id, genre }) => {
  const [imdbID, seImdbID] = useState(null);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { data } = useGetMovieByIdQuery(imdbID, { skip: !imdbID });
  const location = useLocation();
  const ratedMovies = useSelector(selectRatedMovies);

  useEffect(() => {
    if (!data) return;

    if (rating !== null) {
      dispatch(addRatedMovie({ ...data, rating }));
      return;
    }
    if (rating === null) {
      dispatch(removeRatedMovie(data.imdbID));
    }
  }, [data, dispatch, rating]);

  function isAlredyRated() {
    let startRating = null;
    const movieId = imdbID || id;
    const alredyRatedMovie = ratedMovies.find(
      movie => movie.imdbID === movieId
    );

    if (alredyRatedMovie) {
      startRating = alredyRatedMovie.rating;
    }
    return startRating;
  }

  const changeRatingHandle = (event, newValue) => {
    seImdbID(id);
    setRating(newValue);
  };

  return (
    <StyledCard>
      <Link to={`/movie/${imdbID ?? id}`} state={{ from: location }}>
        <StyledCardMedia
          component="img"
          image={poster === 'N/A' ? noPoster : poster}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title} ({year})
          </Typography>
          {genre && (
            <Typography gutterBottom variant="h7" component="div">
              Genre: {genre}
            </Typography>
          )}
        </CardContent>
      </Link>
      <StyledRating
        name="simple-controlled"
        value={isAlredyRated() ?? rating}
        onChange={changeRatingHandle}
      />
    </StyledCard>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genre: PropTypes.string,
};
