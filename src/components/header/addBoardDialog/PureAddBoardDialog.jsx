import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
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
        <TextField onChange={changeBoardName}></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button disabled={disabledSave} color="primary" onClick={addBoard}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PureAddBoardDialog;
