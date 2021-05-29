import styled from "styled-components";

export const BodyContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darken};
  color: ${(props) => props.theme.colors.text};
  overflow: auto;
`;
