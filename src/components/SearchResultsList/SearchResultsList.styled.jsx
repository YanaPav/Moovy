import styled from '@emotion/styled';
import { ListItem, Pagination, LinearProgress } from '@mui/material';

export const SearchList = styled.ul`
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

export const StyledParination = styled(Pagination)`
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0;
`;

export const StyledLoader = styled(LinearProgress)`
  margin-top: 14px;
`;
