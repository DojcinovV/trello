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
export const HomeContainer = styled.div`
  min-height: calc(100vh - 40px);
  display: block;
`;
export const HomeStickyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
export const HomeMenuContainer = styled.div`
  position: relative;
  top: 0px;
`;
export const HomeMenuNav = styled.nav`
  margin: 40px 0 0;
  padding: 0 16px;
  width: 240px;
`;
export const AllBoardsContainer = styled.div`
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
`;
export const HomeMenuNavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;
export const HomeMenuNavLi = styled.li`
  margin-bottom: 4px;
  display: list-item;
  text-align: -webkit-match-parent;
`;
export const HomeMenuNavSpan = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.selected ? "#0079BF" : "#42526e")};
  margin-left: 10px;
`;
export const HomeMenuNavLink = styled.a`
  align-items: center;
  background-color: ${(props) =>
    props.selected ? "rgb(222,237,243)" : "transparent"};
  border-radius: 4px;
  box-shadow: none;
  display: flex;
  font-weight: bold;
  margin: 0;
  min-height: 20px;
  overflow: hidden;
  padding: 6px 8px 6px 0;
  text-decoration: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.selected ? "rgb(222,237,243)" : "rgba(9, 30, 66, 0.08)"};
    color: #091e42;
    ${HomeMenuNavSpan} {
      color: ${(props) => (props.selected ? "" : "#091e42")};
    }
  }
`;
export const HomeMenuNavDiv = styled.div`
  margin-left: 10px;
`;
export const HomeMenuNavWorkspaces = styled.div`
  color: #5e6c84;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  margin-top: 16px;
  text-transform: uppercase;
  flex: 1 1 auto;
  margin: 0;
  padding: 8px 0;
`;
export const StyledAvatar = styled.div`
  font-size: ${(props) => props.fontSize};
  border-radius: 2px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  color: white;
  background: linear-gradient(#b22865, #cd5a91);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const StickyContainer = styled.div`
  position: relative;
  top: 0px !important;
`;
export const StickyContainerHeader = styled.h3`
  display: flex;
  align-items: center;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0 20px 0;
`;
export const StickyContainerSectionHeader = styled.div`
  margin: 0;
  padding: 0 0 11px;
  position: relative;
  display: flex;
`;
export const BoardsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const BoardsLi = styled.li`
  width: 23%;
  padding: 0;
  margin: 0 2% 2% 0;
  transform: translate(0);
  position: relative;
  cursor: pointer;
`;
export const StyledBoardsLink = styled.a`
  background-image: ${(props) => `url(${props.url})`};
  background-color: rgb(0, 121, 191);
  display: block;
  background-size: cover;
  background-position: 50%;
  color: #fff;
  line-height: 20px;
  padding: 8px;
  position: relative;
  text-decoration: none;
`;
export const BoardTitleContainer = styled.div`
  display: flex;
  height: 80px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;
export const BoardTitle = styled.div`
  flex: 0 0 auto;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  overflow: hidden;
  max-height: 40px;
  width: 100%;
  word-wrap: break-word;
`;
export const CreateBoardTitle = styled.div`
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  color: #172b4d;
  display: table-cell;
  height: 98px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  width: inherit;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    box-shadow: none;
    border: none;
    color: #172b4d;
  }
`;
