// react
import { NavLink } from 'react-router-dom';
// libraries
import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

//
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 14px;
  }

  &.active {
    padding-bottom: 4px;
    border-bottom: 2px solid white;
  }
`;

export const StyledTypography = styled(Typography)`
  flex-grow: 1;
  display: block;
  color: white;
`;

export const StyledBox = styled(Box)`
  display: block;
`;
