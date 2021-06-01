import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  HeaderContainer,
  BoardNameLabelContainer,
  BoardNameLabel,
  BoardNameContainer,
} from "./header.styles";
import { BOARDS } from "../../../constants";

const BoardHeader = ({ board }) => {
  const [boardName, setBoardName] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    setBoardName(board.name);
  }, [board, setBoardName]);

  const handleOnChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleOnBlur = (e) => {
    if (e.target.value === "") {
      setBoardName(board.name);
    } else if (e.target.value === board.name) {
      e.preventDefault();
    } else {
      const data = {
        id: id,
        name: e.target.value,
      };
      dispatch({ type: BOARDS.UPDATE_BOARD_NAME, payload: data });
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <HeaderContainer>
      <BoardNameLabelContainer>
        <BoardNameLabel>Update Board Name:</BoardNameLabel>
      </BoardNameLabelContainer>
      <BoardNameContainer
        value={boardName ?? ""}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onKeyDown={onKeyDown}
      ></BoardNameContainer>
    </HeaderContainer>
  );
};

export default BoardHeader;
