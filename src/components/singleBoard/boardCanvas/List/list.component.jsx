import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardComponent from "../Card/card.component";
import ActionButton from "../ActionButton/actionButton.component";
import {
  TrelloListContainer,
  TrelloListHeaderContainer,
  DeleteIconContainer,
} from "./list.styles";
import Tooltip from "@material-ui/core/Tooltip";
import { boardsApi } from "../../../../api";
import Textarea from "react-textarea-autosize";
import { BOARDS } from "../../../../constants";

const ListComponent = ({ title, listId, id }) => {
  const [cards, setCards] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [formText, setFormText] = useState(title);

  const dispatch = useDispatch();

  useEffect(() => {
    boardsApi
      .getCardsOnAList(listId, id)
      .then(function (cards) {
        setCards(JSON.parse(cards));
      })
      .catch(function (err) {});
  }, [setCards, listId, id]);

  const handleAddNewCard = async (name) => {
    const newCards = [...cards];
    await boardsApi
      .createCardOnAList(listId, name)
      .then(function (card) {
        newCards.push(JSON.parse(card));
      })
      .catch(function (err) {
        console.log("Auth, there was an error", err.statusText);
      });
    setCards(newCards);
  };

  const handleDeleteCard = (cardId) => {
    const newCards = cards.filter((card) => card.id !== cardId);
    const data = {
      boardId: id,
      cardId: cardId,
    };
    dispatch({ type: BOARDS.DELETE_CARD, payload: data });
    setCards(newCards);
  };

  const handleOnBlur = () => {
    if (formText !== title) {
      dispatch({
        type: BOARDS.UPDATE_LIST_NAME,
        payload: { name: formText, listId: listId },
      });
    } else if (formText === "") {
      setFormText(title);
    }
    setFormOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleDeleteList = () => {
    dispatch({
      type: BOARDS.DELETE_LIST,
      payload: { listId: listId, boardId: id },
    });
  };

  const renderForm = () => {
    return (
      <Textarea
        autoFocus
        onBlur={handleOnBlur}
        onKeyDown={onKeyDown}
        value={formText}
        onChange={(e) => setFormText(e.target.value)}
        style={{ resize: "none" }}
      />
    );
  };

  const renderTitle = () => {
    return (
      <Tooltip title="Click To Edit List Name">
        <h3 onClick={() => setFormOpen(true)}>{formText}</h3>
      </Tooltip>
    );
  };

  return (
    <TrelloListContainer>
      <TrelloListHeaderContainer>
        {formOpen ? renderForm() : renderTitle()}
        <Tooltip title="Delete List">
          <span
            style={{ width: "42px", height: "42px" }}
            onClick={handleDeleteList}
          >
            <DeleteIconContainer />
          </span>
        </Tooltip>
      </TrelloListHeaderContainer>
      {cards?.map((card, index) => {
        return (
          <CardComponent
            key={index}
            card={card}
            boardId={id}
            handleDeleteCard={handleDeleteCard}
          />
        );
      })}
      <ActionButton
        id={id}
        listId={listId}
        handleAddNewCard={handleAddNewCard}
      />
    </TrelloListContainer>
  );
};

export default ListComponent;
