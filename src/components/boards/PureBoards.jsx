import React from "react";
import {
  MainContainer,
  MainContentContainer,
  HomeContainer,
  HomeMenuContainer,
  HomeStickyContainer,
  AllBoardsContainer,
  StyledAvatar,
  StickyContainer,
  StickyContainerHeader,
  StickyContainerSectionHeader,
  BoardsUl,
  BoardsLi,
  StyledBoardsLink,
  BoardTitleContainer,
  BoardTitle,
  CreateBoardTitle,
} from "./boards.styles";
import HomeMenuNavComponent from "./HomeMenuNav/HomeMenuNav.component";
import { AddBoardDialog } from "../../components/header/addBoardDialog";

const PureBoards = ({ boards, dialogOpen, setDialogOpen, history }) => {
  const BoardsList = (
    <BoardsUl>
      {boards?.map((board, index) => {
        return (
          <BoardsLi
            key={index}
            onClick={() => history.push(`/boards/${board?.id}`)}
          >
            <StyledBoardsLink
              url={
                board?.prefs?.backgroundImageScaled !== null
                  ? board?.prefs?.backgroundImageScaled[3]?.url
                  : null
              }
            >
              <BoardTitleContainer>
                <BoardTitle>{board?.name}</BoardTitle>
              </BoardTitleContainer>
            </StyledBoardsLink>
          </BoardsLi>
        );
      })}
      <BoardsLi>
        <CreateBoardTitle onClick={() => setDialogOpen(true)}>
          <p>
            <span>Create new board</span>
          </p>
        </CreateBoardTitle>
        <AddBoardDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
      </BoardsLi>
    </BoardsUl>
  );
  return (
    <MainContainer>
      <MainContentContainer>
        <HomeContainer>
          <HomeStickyContainer>
            <HomeMenuContainer>
              <HomeMenuNavComponent history={history} />
            </HomeMenuContainer>
            <AllBoardsContainer>
              <StickyContainer>
                <div>
                  <StickyContainerHeader>Your Workspaces</StickyContainerHeader>
                  <div>
                    <StickyContainerSectionHeader>
                      <StyledAvatar width="32px" height="32px" fontSize="20px">
                        H
                      </StyledAvatar>
                      <h3 style={{ margin: "auto 0 auto 10px" }}>Htec</h3>
                    </StickyContainerSectionHeader>
                  </div>
                  <div style={{ display: "block" }}>{BoardsList}</div>
                </div>
              </StickyContainer>
            </AllBoardsContainer>
          </HomeStickyContainer>
        </HomeContainer>
      </MainContentContainer>
    </MainContainer>
  );
};

export default PureBoards;
