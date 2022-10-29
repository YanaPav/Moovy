import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Rating,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noPoster from '../../noPoster.jpg';
import {
  addRatedMovie,
  removeRatedMovie,
} from '../../redux/slices/ratedMoviesSlice';
import { useGetMovieByIdQuery } from '../../redux/slices/getMovieDetailsSlice';

export const MovieCard = ({ poster, title, year, id, genre }) => {
  const [imdbID, seImdbID] = useState(null);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { data } = useGetMovieByIdQuery(imdbID, { skip: !imdbID });
  const location = useLocation();
  const ratedMovies = useSelector(state => state.ratedMovies);

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
    <Card
      sx={{
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Link to={`/movie/${imdbID ?? id}`} state={{ from: location }}>
        <CardMedia
          component="img"
          image={poster === 'N/A' ? noPoster : poster}
          alt={title}
          sx={{ backgroundColor: 'darkgray' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title} ({year})
          </Typography>
          {genre && (
            <Typography gutterBottom variant="h7" component="div">
              Genre: {genre}
            </Typography>
          )}
        </CardContent>
      </Link>
      <CardActions>
        <Rating
          name="simple-controlled"
          value={isAlredyRated() ?? rating}
          onChange={changeRatingHandle}
        />
      </CardActions>
    </Card>
  );
};
