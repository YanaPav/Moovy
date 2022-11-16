import { StyledContainer } from './ContentContainer.styled';

export const ContentContainer = ({ children }) => {
  return <StyledContainer maxWidth="lx">{children}</StyledContainer>;
};
