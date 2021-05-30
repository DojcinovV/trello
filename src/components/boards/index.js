import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PureBoards from "./PureBoards";

const BoardsComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { boards } = useSelector((s) => s.boards);
  const history = useHistory();
  return (
    <PureBoards
      boards={boards}
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      history={history}
    />
  );
};

export default BoardsComponent;
