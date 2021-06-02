import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  HeaderContainer,
  BoardNameLabelContainer,
  BoardNameLabel,
  BoardNameTitle,
  BoardNameContainer,
} from "./header.styles";
import { BOARDS } from "../../../constants";
import Textarea from "react-textarea-autosize";
import Tooltip from "@material-ui/core/Tooltip";

const BoardHeader = ({ board, id }) => {
  const [boardName, setBoardName] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setBoardName(board.name);
  }, [board, setBoardName]);

  const handleOnBlur = (e) => {
    if (boardName !== board.name && boardName !== "") {
      const data = {
        id: id,
        name: e.target.value,
      };
      dispatch({ type: BOARDS.UPDATE_BOARD_NAME, payload: data });
    } else if (boardName === "") {
      setBoardName(board.name);
    }
    setOpenForm(false);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  };

  const renderTitle = () => {
    return (
      <BoardNameContainer onClick={() => setOpenForm(true)}>
        <Tooltip title="Click to edit Board Name">
          <BoardNameTitle>{boardName}</BoardNameTitle>
        </Tooltip>
      </BoardNameContainer>
    );
  };

  const renderForm = () => {
    return (
      <Textarea
        autoFocus
        onBlur={handleOnBlur}
        onKeyDown={onKeyDown}
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
        style={{ resize: "none" }}
      />
    );
  };

  return (
    <HeaderContainer>
      <BoardNameLabelContainer>
        <BoardNameLabel>Board Name:</BoardNameLabel>
      </BoardNameLabelContainer>
      {openForm ? renderForm() : renderTitle()}
    </HeaderContainer>
  );
};

export default BoardHeader;
