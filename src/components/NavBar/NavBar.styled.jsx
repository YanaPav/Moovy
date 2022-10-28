import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
