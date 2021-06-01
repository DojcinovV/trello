import React, { useEffect, useState } from "react";
import CardComponent from "../Card/card.component";
import ActionButton from "../ActionButton/actionButton.component";
import { TrelloListContainer } from "./list.styles";
import { boardsApi } from "../../../../api";

const ListComponent = ({ title, listId, id }) => {
  const [cards, setCards] = useState([]);

  const handleAddNewCard = (name) => {
    const newCards = [...cards];
    newCards.push({
      name: name,
      desc: "",
    });
    setCards(newCards);
  };

  useEffect(() => {
    boardsApi
      .getCardsOnAList(listId, id)
      .then(function (cards) {
        setCards(JSON.parse(cards));
      })
      .catch(function (err) {});
  }, [setCards, listId, id]);

  return (
    <TrelloListContainer>
      <h3>{title} </h3>
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
