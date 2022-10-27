import { Box } from '@mui/system';
import { useState } from 'react';
import { SearchResultsList } from '../../components/SearchResultsList/SearchResultsList';
import { SearchForm } from '../../components/SearchForm/SearchForm';

export const SearchPage = () => {
  const [title, setTitle] = useState('');

  return (
    <Box sx={{ py: 0, px: 20 }}>
      <SearchForm onSubmit={setTitle} />
      <SearchResultsList title={title} />
    </Box>
  );
};
