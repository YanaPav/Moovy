import styled from '@emotion/styled';
import { Rating, CardMedia, Card } from '@mui/material';

export const StyledRating = styled(Rating)`
  margin-left: auto;
  margin-right: 4px;
  margin-bottom: 4px;
`;

export const StyledCardMedia = styled(CardMedia)`
  background-color: darkgray;
  max-height: 470px;
  max-width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
