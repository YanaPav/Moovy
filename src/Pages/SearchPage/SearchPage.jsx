import { Box } from '@mui/system';
import { SearchResultsList } from '../../components/SearchResultsList/SearchResultsList';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export const SearchPage = () => {
  return (
    <Box sx={{ py: 0 }}>
      <SearchForm />
      <SearchResultsList />
    </Box>
  );
};
