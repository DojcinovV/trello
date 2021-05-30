import React from "react";
import {
  HomeMenuNav,
  HomeMenuNavUl,
  HomeMenuNavLi,
  HomeMenuNavLink,
  HomeMenuNavSpan,
  HomeMenuNavWorkspaces,
  StyledAvatar,
  HomeMenuNavDiv,
} from "../boards.styles";

import DashboardIcon from "@material-ui/icons/Dashboard";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import HomeIcon from "@material-ui/icons/Home";

const HomeMenuNavComponent = ({ history }) => {
  return (
    <HomeMenuNav>
      <div>
        <HomeMenuNavUl>
          <HomeMenuNavLi onClick={() => history.push("/boards")}>
            <HomeMenuNavLink>
              <HomeMenuNavSpan>
                <DashboardIcon fontSize="small" />
                <HomeMenuNavDiv>Boards</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
          <HomeMenuNavLi onClick={() => history.push("/templates")}>
            <HomeMenuNavLink>
              <HomeMenuNavSpan>
                <FilterNoneIcon fontSize="small" />
                <HomeMenuNavDiv>Templates</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
          <HomeMenuNavLi onClick={() => history.push("/home")}>
            <HomeMenuNavLink>
              <HomeMenuNavSpan>
                <HomeIcon fontSize="small" />
                <HomeMenuNavDiv>Home</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
        </HomeMenuNavUl>
      </div>
      <div style={{ marginTop: "10px" }}>
        <HomeMenuNavUl>
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <HomeMenuNavWorkspaces>Workspaces</HomeMenuNavWorkspaces>
          </div>
          <HomeMenuNavLi>
            <HomeMenuNavLink>
              <HomeMenuNavSpan>
                <StyledAvatar width="24px" height="24px" fontSize="14px">
                  H
                </StyledAvatar>
                <HomeMenuNavDiv>Htec</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
        </HomeMenuNavUl>
      </div>
    </HomeMenuNav>
  );
};

export default HomeMenuNavComponent;
