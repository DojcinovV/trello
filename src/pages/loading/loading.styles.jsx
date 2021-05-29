import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
`;

export const Image = styled.img`
  transition: filter 0.5s ease-in-out;
  width: 25vw;
  height: 10vw;
  filter: ${(props) => `grayscale(${props.scale})`};
`;
