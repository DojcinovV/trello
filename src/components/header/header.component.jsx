import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  HeaderContainer,
  HeaderInner,
  HeaderLeftPart,
  HeaderRightPart,
  StyledLink,
  LinkGifContainer,
  BackToHomeLink,
  BackToHomeSpan,
  BoardsButton,
  BoardsSpan,
} from "./header.styles";

import HomeIcon from "../../assets/home.svg";
import TrelloIcon from "../../assets/trello.svg";
import PlusIcon from "../../assets/plus.svg";
import InfoIcon from "../../assets/info.svg";
import NotificationIcon from "../../assets/notification.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { boards } = useSelector((s) => s.boards);
  const history = useHistory();

  const handleClose = (id) => {
    setAnchorEl(null);
    if (id.type !== "click" && id.type !== "keydown")
      history.push(`/boards/${id}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const BoardsMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {boards.map((board, index) => (
        <MenuItem key={index} onClick={() => handleClose(board?.id)}>
          {board?.name}
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <HeaderContainer>
      <HeaderInner>
        <HeaderLeftPart>
          <BackToHomeLink>
            <BackToHomeSpan>
              <img src={HomeIcon} alt="back to home" />
            </BackToHomeSpan>
          </BackToHomeLink>
          <BoardsButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            name="tuka"
          >
            <BackToHomeSpan>
              <img src={TrelloIcon} alt="trello" />
            </BackToHomeSpan>
            <BoardsSpan>Boards</BoardsSpan>
          </BoardsButton>
          {BoardsMenu}
        </HeaderLeftPart>
        <StyledLink>
          <LinkGifContainer>
            <img
              src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif"
              alt="Trello Gif"
              width="75px"
            />
          </LinkGifContainer>
        </StyledLink>
        <HeaderRightPart>
          <BoardsButton>
            <BackToHomeSpan>
              <img src={PlusIcon} alt="Create Board" />
            </BackToHomeSpan>
          </BoardsButton>
          <BoardsButton>
            <BackToHomeSpan>
              <img src={InfoIcon} alt="Info" />
            </BackToHomeSpan>
          </BoardsButton>
          <BoardsButton>
            <BackToHomeSpan>
              <img src={NotificationIcon} alt="Notifcations" />
            </BackToHomeSpan>
          </BoardsButton>
        </HeaderRightPart>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
