import { StyledTextField } from '../SearchForm/SearchForm.styled';

export const GenreFilter = ({ value, onChange }) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label="Find movies by genree"
      name="filter"
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
    />
  );
};
