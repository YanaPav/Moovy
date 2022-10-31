import { useSearchParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField, StyledForm } from './SearchForm.styled';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target.elements;

    if (form.releaseYear.value.trim()) {
      setSearchParams({
        title: form.title.value.trim(),
        releaseYear: form.releaseYear.value.trim(),
      });
      return;
    }
    setSearchParams({
      title: form.title.value.trim(),
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <StyledTextField
          id="outlined-basic"
          label="Type movie title"
          variant="outlined"
          size="small"
          name="title"
          required
        />
        <StyledTextField
          id="outlined-basic"
          label="Type release year"
          variant="outlined"
          size="small"
          name="releaseYear"
          inputProps={{
            pattern: '[0-9]{4}',
            title: 'YYYY',
          }}
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
    </StyledForm>
  );
};
