import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PureAddBoardDialog from "./PureAddBoardDialog";

import { BOARDS } from "../../../constants";

export const AddBoardDialog = ({ dialogOpen, setDialogOpen }) => {
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState("");
  const changeBoardName = (e) => {
    setBoardName(e.target.value);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setBoardName("");
  };

  const addBoard = () => {
    dispatch({
      type: BOARDS.CREATE_BOARD,
      payload: boardName,
    });
    closeDialog();
  };

  const disabledSave = boardName.length === 0;
  return (
    <PureAddBoardDialog
      changeBoardName={changeBoardName}
      dialogOpen={dialogOpen}
      closeDialog={closeDialog}
      addBoard={addBoard}
      disabledSave={disabledSave}
    ></PureAddBoardDialog>
  );
};
