import noMoviesPoster from '../../noMoviesPoster.png';
import { Container } from '@mui/material';

export const NoRatedMovies = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
      }}
    >
      <p>You have no rated movies yet :(</p>
      <img src={noMoviesPoster} alt="popcorn" width="500" />
    </Container>
  );
};
