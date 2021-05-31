import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  overflow-y: auto;
  outline: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  overflow-y: auto;
`;
export const ContentContainer = styled.div`
  flex-grow: 1;
`;
export const BoardMainContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  position: relative;
  transition: margin 0.1s ease-in;
`;
