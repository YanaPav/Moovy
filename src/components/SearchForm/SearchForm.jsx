import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.searchQwery.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <StyledTextField
          id="outlined-basic"
          label="Type movie title or title and release year"
          variant="outlined"
          size="small"
          name="searchQwery"
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};
