import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardComponent from "../Card/card.component";
import ActionButton from "../ActionButton/actionButton.component";
import { TrelloListContainer } from "./list.styles";
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

  const handleAddNewCard = (name) => {
    const newCards = [...cards];
    newCards.push({
      name: name,
      desc: "",
    });
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
    return <h3 onClick={() => setFormOpen(true)}>{formText}</h3>;
  };

  return (
    <TrelloListContainer>
      {formOpen ? renderForm() : renderTitle()}
      {cards?.map((card, index) => {
        return (
          <CardComponent key={index} text={card?.desc} name={card?.name} />
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
