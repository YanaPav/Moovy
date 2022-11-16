import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 730px) {
    flex-direction: row;
    justify-content: center;
    gap: 8px;

    button {
      align-self: stretch;
    }
  }
`;
