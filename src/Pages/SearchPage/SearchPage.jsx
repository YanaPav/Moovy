import { Box } from '@mui/system';
import { SearchResultsList } from '../../components/SearchResultsList/SearchResultsList';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export const SearchPage = () => {
  return (
    <Box sx={{ py: 0, px: 20 }}>
      <SearchForm />
      <SearchResultsList />
    </Box>
  );
};
