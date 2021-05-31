import React from "react";
import {
  HeaderContainer,
  BoardNameContainer,
  BoardName,
  BoardNameInput,
} from "./header.styles";

const BoardHeader = () => {
  return (
    <HeaderContainer>
      <BoardNameContainer>
        <BoardName>TEST</BoardName>
        <BoardNameInput></BoardNameInput>
      </BoardNameContainer>
    </HeaderContainer>
  );
};

export default BoardHeader;
