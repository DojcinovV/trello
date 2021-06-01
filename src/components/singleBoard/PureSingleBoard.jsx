import React from "react";
import BoardHeader from "./header/header.component";
import BoardCanvasComponent from "./boardCanvas/boardCanvas.component";
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
              <BoardCanvasComponent />
            </BoardMainContent>
          </ContentContainer>
        </MainContentContainer>
      </MainContainer>
    </>
  );
};

export default PureSingleBoard;
