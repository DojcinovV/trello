import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ListItem } from "./comingsoon.styles";

const ComingSoon = () => {
  return (
    <Grid>
      <h1>Coming Soon...</h1>
      <Divider />
      <Grid container direction="row">
        <ListItem item lg={3} md={3}>
          Lorem Ipsum
        </ListItem>
        <ListItem item lg={3} md={3}>
          Lorem Ipsum
        </ListItem>
        <ListItem item lg={3} md={3}>
          Lorem Ipsum
        </ListItem>
        <ListItem item lg={3} md={3}>
          Lorem Ipsum
        </ListItem>
      </Grid>
      <Divider />
      <ListItem container>
        <div>lorem ipsum</div>
      </ListItem>
      <Divider />
    </Grid>
  );
};

export default ComingSoon;
