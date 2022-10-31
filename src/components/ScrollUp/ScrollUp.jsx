import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
        <Button
          onClick={scrollUp}
          type="button"
          variant="contained"
          size="small"
          sx={{ position: 'fixed', right: '10px', bottom: '10px' }}
        >
          <ArrowUpwardIcon />
        </Button>
      )}
    </>
  );
};
