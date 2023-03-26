import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
`;

export default StyledButton;
