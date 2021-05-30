import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import PureBoards from "./PureBoards";
import CommingSoon from "./ComingSoon/comingsoon.component";

const BoardsComponent = (props) => {
  const tab = props.location.pathname.split("/").slice(-1)[0];
  const [dialogOpen, setDialogOpen] = useState(false);
  const { boards } = useSelector((s) => s.boards);
  const history = useHistory();
  switch (tab) {
    case "templates":
    case "home":
      return <CommingSoon />;
    default:
      return (
        <PureBoards
          boards={boards}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          history={history}
        />
      );
  }
};

export default withRouter(BoardsComponent);
