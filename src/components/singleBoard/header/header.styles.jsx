import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: auto;
  padding: 8px 4px 4px 8px;
  position: relative;
`;
export const BoardNameContainer = styled.div`
  background: transparent;
  cursor: default;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0;
  text-decoration: none;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 3px;
  color: #fff;
  float: left;
  height: 32px;
  margin: 0 4px 4px 0;
`;
export const BoardName = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0 12px;
  margin: 0;
`;
export const BoardNameInput = styled.input`
  display: none;
  background-color: #fff;
  border: 0;
  font-weight: 700;
  font-size: 18px;
  height: 32px;
  margin: 0;
  padding: 0 12px;
`;
