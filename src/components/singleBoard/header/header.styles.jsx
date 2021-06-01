import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: auto;
  padding: 8px 4px 4px 8px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const BoardNameLabelContainer = styled.div`
  margin-right: 10px;
`;
export const BoardNameLabel = styled.h3`
  margin: 0;
  padding: 0;
  color: #fff;
`;
export const BoardNameContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.24);
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
  margin: 0 0 0 0;
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 100%, 0.32);
  }
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
