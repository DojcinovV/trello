import styled from "styled-components";

export const BodyContainer = styled.div`
  height: 100vh;
  color: ${(props) => props.theme.colors.text};
  overflow: auto;
`;
