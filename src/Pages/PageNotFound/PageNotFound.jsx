import { Container } from '@mui/material';
import pageNotFound from '../../images/pageNotFound.png';

export const PageNotFound = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={pageNotFound} alt="Page not found" width={450} />
    </Container>
  );
};
