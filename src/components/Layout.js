import styled from "styled-components"

export const Section = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  &:last-of-type{
    margin-bottom: 0;
  }
`;

export const TwoFold = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;