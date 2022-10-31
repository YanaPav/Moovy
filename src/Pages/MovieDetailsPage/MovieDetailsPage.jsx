import { useParams, useNavigate } from 'react-router-dom';
import { LinearProgress, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetMovieByIdQuery } from 'redux/slices/getMovieDetailsSlice';
import { MovieDetailsCard } from 'components/MovieDetailsCard/MovieDetailsCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<ArrowBackIcon />}
          type="button"
          onClick={() => navigate(-1)}
          sx={{ height: '40px', marginRight: 'auto' }}
        >
          Go back
        </Button>
      </Container>

      {isLoading && <LinearProgress sx={{ marginTop: '14px' }} />}

      {error && (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <p>Something goes wrong :( Try again later.</p>
          {/* Real error {error.data.Error} */}
        </Container>
      )}

      {data?.Error && (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <p>{data.Error}</p>
        </Container>
      )}

      {data && !data.Error && <MovieDetailsCard />}
    </>
  );
};

export default MovieDetailsPage;
