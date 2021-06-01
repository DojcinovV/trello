import React from "react";
import {
  HeaderContainer,
  BoardNameLabelContainer,
  BoardNameContainer,
  BoardName,
  BoardNameInput,
  BoardNameLabel,
} from "./header.styles";

const BoardHeader = ({ board }) => {
  return (
    <HeaderContainer>
      <BoardNameLabelContainer>
        <BoardNameLabel>Board Name:</BoardNameLabel>
      </BoardNameLabelContainer>
      <BoardNameContainer>
        <BoardName>{board.name}</BoardName>
        <BoardNameInput></BoardNameInput>
      </BoardNameContainer>
    </HeaderContainer>
  );
};

export default BoardHeader;
