// react
import { useNavigate } from 'react-router-dom';
// libraries
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// components
import { StyledBtn } from './GoBackBtn.styled';

//
export const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <StyledBtn
      variant="contained"
      size="small"
      startIcon={<ArrowBackIcon />}
      type="button"
      onClick={() => navigate(-1)}
    >
      Go back
    </StyledBtn>
  );
};
