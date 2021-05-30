import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  DialogContentText,
} from "@material-ui/core";

const PureAddBoardDialog = ({
  changeBoardName,
  dialogOpen,
  closeDialog,
  addBoard,
  disabledSave,
}) => {
  return (
    <Dialog open={dialogOpen} onClose={closeDialog}>
      <DialogTitle>Add Board</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create new board, please enter Board Name here.
        </DialogContentText>
        <TextField
          margin="dense"
          label="Board Name"
          onChange={changeBoardName}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button
          disabled={disabledSave}
          color="primary"
          variant="contained"
          onClick={addBoard}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PureAddBoardDialog;
