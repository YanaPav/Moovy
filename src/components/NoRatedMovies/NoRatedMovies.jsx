import { Container } from '@mui/material';
import noMoviesPoster from 'images/noMoviesPoster.png';

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
