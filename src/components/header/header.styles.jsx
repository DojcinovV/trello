import styled from "styled-components";
import Link from "@material-ui/core/Link";

export const HeaderContainer = styled.div`
  min-height: 40px;
  max-height: 40px;
`;

export const HeaderInner = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-height: 40px;
  overflow: hidden;
  padding: 4px 4px;
`;

export const HeaderLeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  flex-basis: 100%;
`;
export const StyledLink = styled(Link)`
  display: block;
  position: relative;
  flex-shrink: 0;
  height: 30px;
  margin-top: 1px;
  cursor: pointer;
`;
export const LinkGifContainer = styled.div`
  width: 80px;
  height: 16px;
  margin: 7px 0;
  position: relative;
  opacity: 0.5;
  &:hover {
    opacity: 0.8;
  }
`;
export const HeaderRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-basis: 100%;
`;
export const BackToHomeLink = styled.a`
  border-radius: 3px;
  border: 0;
  text-decoration: none;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: none;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 0 0;
  padding: 0;
  white-space: nowrap;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: none;
    color: #ffffff;
    outline: 0;
  }
`;
export const BackToHomeSpan = styled.span`
  display: flex;
  width: 32px;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export const BoardsButton = styled.button`
  border-radius: 3px;
  border: 0;
  text-decoration: none;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: none;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  margin: 0 4px 0 0;
  padding: 0;
  white-space: nowrap;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: none;
    color: #ffffff;
    outline: 0;
  }
`;
export const BoardsSpan = styled.span`
  overflow: hidden;
  padding: 0 8px 0 2px;
  max-width: 150px;
  ont-weight: bold;
`;
