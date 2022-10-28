import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import noPoster from '../../noPoster.jpg';
import {
  addRatedMovie,
  removeRatedMovie,
} from '../../redux/slices/ratedMoviesSlice';
import { useGetMovieByIdQuery } from '../../redux/slices/getMovieDetailsSlice';

export const MovieCard = ({ poster, title, year, id, startRating, genre }) => {
  const [imdbID, seImdbID] = useState(null);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { data } = useGetMovieByIdQuery(imdbID, { skip: !imdbID });

  useEffect(() => {
    if (!data) return;
    console.log(data);
    console.log(rating);

    if (rating !== null) {
      dispatch(addRatedMovie({ ...data, rating }));
      return;
    }
    if (rating === null) {
      dispatch(removeRatedMovie(data.imdbID));
    }
  }, [data, dispatch, rating]);

  const changeRatingHandle = (event, newValue) => {
    seImdbID(id);
    setRating(newValue);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        width="240"
        image={poster === 'N/A' ? noPoster : poster}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} ({year})
        </Typography>
        {genre && (
          <Typography gutterBottom variant="h6" component="div">
            Genre: {genre}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Rating
          name="simple-controlled"
          value={startRating ?? rating}
          onChange={changeRatingHandle}
        />
      </CardActions>
    </Card>
  );
};
