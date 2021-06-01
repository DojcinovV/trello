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
export const BoardNameLabel = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0 12px;
  margin: 0;
`;
export const BoardNameContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;
export const BoardNameTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0 12px;
  margin: 0;
`;
