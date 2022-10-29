import { SearchResultsList } from '../../components/SearchResultsList/SearchResultsList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import Container from '@mui/material/Container';

export const SearchPage = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: 10 }}>
        <SearchForm />
        <SearchResultsList />
      </Container>
    </>
  );
};
