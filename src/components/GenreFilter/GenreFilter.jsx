import PropTypes from 'prop-types';
import { StyledTextField } from '../Common/StyledTextField.styled';

export const GenreFilter = ({ value, onChange }) => {
  return (
    <StyledTextField
      id="outlined-basic"
      label="Find movies by genre"
      name="filter"
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
    />
  );
};

GenreFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
