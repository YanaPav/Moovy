import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import noPoster from '../../noPoster.jpg';

export const MovieCard = ({ poster, title, year }) => {
  const [rating, setRating] = useState(0);

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
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </CardActions>
    </Card>
  );
};
