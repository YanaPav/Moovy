import { Outlet, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  LinearProgress,
} from '@mui/material';
import { StyledNavLink } from './NavBar.styled';
import { Suspense } from 'react';

export const NavBar = () => {
  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block', color: 'white' },
              }}
            >
              <Link to="/">MOOVY</Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <StyledNavLink to="/" end key="home">
                Home
              </StyledNavLink>
              <StyledNavLink to="/rated" end key="rated">
                My movies
              </StyledNavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
};
