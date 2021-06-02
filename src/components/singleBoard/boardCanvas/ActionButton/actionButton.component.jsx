import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BOARDS } from "../../../../constants";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {
  ActionButtonContainer,
  CardContainer,
  ButtonContainer,
  FormButtonGroup,
  ListContainer,
} from "./actionButton.styles";
import Textarea from "react-textarea-autosize";

const ActionButton = ({ list, id, listId, handleAddNewCard }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddList = () => {
    if (text) {
      let data = {
        name: text,
        id: id,
      };
      dispatch({ type: BOARDS.CREATE_LIST_ON_A_BOARD, payload: data });
      setText("");
    }
  };

  const handleAddCard = () => {
    if (text) {
      handleAddNewCard(text);
      setText("");
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => setFormOpen(false), 150);
  };

  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card";

    return (
      <ActionButtonContainer list={list} onClick={() => setFormOpen(true)}>
        <AddIcon>add</AddIcon>
        <p>{buttonText}</p>
      </ActionButtonContainer>
    );
  };

  const renderForm = () => {
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card..";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <ListContainer list={list}>
        <CardContainer>
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={handleOnBlur}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
            }}
          />
        </CardContainer>
        <FormButtonGroup>
          <ButtonContainer
            variant="contained"
            onClick={() => (list ? handleAddList() : handleAddCard())}
          >
            {buttonTitle}
          </ButtonContainer>
          <CloseIcon style={{ marginLeft: "0", cursor: "pointer" }}>
            close
          </CloseIcon>
        </FormButtonGroup>
      </ListContainer>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
};

export default ActionButton;
