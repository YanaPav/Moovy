import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './NavBar.styled';

export const NavBar = props => {
  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MOOVY
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

      <Outlet />
    </>
  );
};
