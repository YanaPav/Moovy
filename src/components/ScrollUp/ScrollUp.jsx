import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { StyledBtn } from './ScrollUp.styled';

export const ScrollUp = () => {
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollUpBtn(true);
        return;
      }
      setShowScrollUpBtn(false);
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollUpBtn && (
        <StyledBtn
          onClick={scrollUp}
          type="button"
          variant="contained"
          size="small"
        >
          <ArrowUpwardIcon />
        </StyledBtn>
      )}
    </>
  );
};
