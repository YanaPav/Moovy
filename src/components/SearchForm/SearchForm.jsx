import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField, StyledForm } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filterValuesSlice';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;
    dispatch(
      setFilters({
        title: form.title.value,
        releaseYear: form.releaseYear.value,
      })
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <StyledTextField
          id="outlined-basic"
          label="Type movie title"
          variant="outlined"
          size="small"
          name="title"
        />
        <StyledTextField
          id="outlined-basic"
          label="Type release year"
          variant="outlined"
          size="small"
          name="releaseYear"
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
