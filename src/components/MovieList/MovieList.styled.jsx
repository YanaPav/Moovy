import styled from '@emotion/styled';
import { ListItem } from '@mui/material';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 0;
`;

export const StyledListItem = styled(ListItem)`
  padding: 0;
  width: 350px;
  height: 620px;
`;
