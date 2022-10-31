import { StyledTextField } from '../SearchForm/SearchForm.styled';
import PropTypes from 'prop-types';

export const GenreFilter = ({ value, onChange }) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label="Find movies by genre"
      name="filter"
      variant="outlined"
      size="small"
      sx={{ marginLeft: '10px' }}
      value={value}
      onChange={onChange}
    />
  );
};

GenreFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
