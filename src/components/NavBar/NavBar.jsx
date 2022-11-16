// react
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
// libraries
import { AppBar, Toolbar, Container, LinearProgress } from '@mui/material';
// components
import { StyledNavLink, StyledTypography, StyledBox } from './NavBar.styled';
import { ContentContainer } from '../ContentContainer/ContentContainer';

//
export const NavBar = () => {
  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="lx">
          <Toolbar>
            <StyledTypography variant="h6" component="div">
              <Link to="/">MOOVY</Link>
            </StyledTypography>

            <StyledBox>
              <StyledNavLink to="/" end key="home">
                Home
              </StyledNavLink>
              <StyledNavLink to="/rated" end key="rated">
                My movies
              </StyledNavLink>
            </StyledBox>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<LinearProgress />}>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Suspense>
    </>
  );
};
