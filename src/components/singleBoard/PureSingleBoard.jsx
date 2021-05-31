import React from "react";
import BoardHeader from "./header/header.component";
import {
  MainContainer,
  MainContentContainer,
  ContentContainer,
  BoardMainContent,
} from "./singleBoards.styles";

const PureSingleBoard = () => {
  return (
    <>
      <MainContainer>
        <MainContentContainer>
          <ContentContainer>
            <BoardMainContent>
              <BoardHeader />
              <div>Board Canvas</div>
            </BoardMainContent>
          </ContentContainer>
        </MainContentContainer>
      </MainContainer>
    </>
  );
};

export default PureSingleBoard;
