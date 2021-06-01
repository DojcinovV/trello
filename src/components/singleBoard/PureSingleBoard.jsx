import React from "react";
import BoardHeader from "./header/header.component";
import {
  MainContainer,
  MainContentContainer,
  ContentContainer,
  BoardMainContent,
} from "./singleBoards.styles";

const PureSingleBoard = ({ board }) => {
  return (
    <>
      <MainContainer
        background={board.background}
        backgroundImage={board.backgroundImage}
      >
        <MainContentContainer>
          <ContentContainer>
            <BoardMainContent>
              <BoardHeader board={board} />
              <div>Board Canvas</div>
            </BoardMainContent>
          </ContentContainer>
        </MainContentContainer>
      </MainContainer>
    </>
  );
};

export default PureSingleBoard;
