import { Container } from '@mui/material';
import { useGetMovieByIdQuery } from '../../redux/slices/getMovieDetailsSlice';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useGetMovieByIdQuery(movieId);

  console.log(data);
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      Hello
    </Container>
  );
};
