import React, { useState } from "react";
import { withRouter } from "react-router";
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

const HomeMenuNavComponent = ({ history, location }) => {
  const [tab, setTab] = useState(location.pathname.split("/").slice(-1)[0]);
  console.log("tab", tab);
  return (
    <HomeMenuNav>
      <div>
        <HomeMenuNavUl>
          <HomeMenuNavLi
            onClick={() => setTab("dashboard") & history.push("/dashboard")}
          >
            <HomeMenuNavLink selected={tab === "dashboard" ? true : false}>
              <HomeMenuNavSpan selected={tab === "dashboard" ? true : false}>
                <DashboardIcon fontSize="small" />
                <HomeMenuNavDiv>Boards</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
          <HomeMenuNavLi
            selected={tab === "templates" ? true : false}
            onClick={() =>
              setTab("templates") & history.push("/dashboard/templates")
            }
          >
            <HomeMenuNavLink selected={tab === "templates" ? true : false}>
              <HomeMenuNavSpan selected={tab === "templates" ? true : false}>
                <FilterNoneIcon fontSize="small" />
                <HomeMenuNavDiv>Templates</HomeMenuNavDiv>
              </HomeMenuNavSpan>
            </HomeMenuNavLink>
          </HomeMenuNavLi>
          <HomeMenuNavLi
            selected={tab === "home" ? true : false}
            onClick={() => setTab("home") & history.push("/dashboard/home")}
          >
            <HomeMenuNavLink selected={tab === "home" ? true : false}>
              <HomeMenuNavSpan selected={tab === "home" ? true : false}>
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

export default withRouter(HomeMenuNavComponent);
