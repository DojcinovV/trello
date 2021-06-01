import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ListItem } from "./comingsoon.styles";
import {
  MainContainer,
  MainContentContainer,
  HomeContainer,
  HomeStickyContainer,
  AllBoardsContainer,
  StickyContainer,
  StickyContainerHeader,
} from "../boards.styles";

const ComingSoon = () => {
  return (
    <MainContainer>
      <MainContentContainer>
        <HomeContainer>
          <HomeStickyContainer>
            <AllBoardsContainer>
              <StickyContainer>
                <Grid>
                  <StickyContainerHeader>Coming Soon...</StickyContainerHeader>
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
              </StickyContainer>
            </AllBoardsContainer>
          </HomeStickyContainer>
        </HomeContainer>
      </MainContentContainer>
    </MainContainer>
  );
};

export default ComingSoon;
