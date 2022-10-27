import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import noPoster from '../../noPoster.jpg';
import {
  addRatedMovie,
  removeRatedMovie,
} from '../../redux/slices/ratedMoviesSlice';

export const MovieCard = ({ poster, title, year, id }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const changeRatingHandle = (event, newValue) => {
    console.log(newValue);
    setRating(newValue);
    if (newValue !== null) {
      dispatch(addRatedMovie({ poster, title, year, id, rating: newValue }));
      return;
    }
    if (newValue === null) {
      dispatch(removeRatedMovie(id));
    }
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
      </CardContent>
      <CardActions>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={changeRatingHandle}
        />
      </CardActions>
    </Card>
  );
};
