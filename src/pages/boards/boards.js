import React from "react";
import BoardsComponent from "../../components/boards";
import Grid from "@material-ui/core/Grid";
import HomeMenuNavComponent from "../../components/boards/HomeMenuNav/HomeMenuNav.component";
import { useHistory } from "react-router-dom";

const Boards = () => {
  const history = useHistory();
  return (
    <Grid container direction="row">
      <Grid item md={1} lg={1}></Grid>
      <Grid item md={3} lg={3}>
        <HomeMenuNavComponent history={history} />
      </Grid>
      <Grid item md={7} lg={7}>
        <BoardsComponent />
      </Grid>
    </Grid>
  );
};

export default Boards;
