import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField } from './SearchForm.styled';

export const SearchForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.searchQwery.value);
    fetchFilms(e.target.elements.searchQwery.value);
  };

  const fetchFilms = async title => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${title}&apikey=5d2eed6b`
    );
    console.log(response);
  };
  return (
    <form onSubmit={onSubmit}>
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
