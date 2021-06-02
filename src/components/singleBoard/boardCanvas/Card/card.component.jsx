import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardContainer } from "./card.styles";
import CardModalComponent from "./cardModal";
import { boardsApi } from "../../../../api/boards.api";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ card, boardId, handleDeleteCard }) => {
  const [cardAttachmentUrl, setCardAttachmentUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (card?.id && card?.idAttachmentCover) {
      boardsApi
        .getCardAttachment(card?.id, card?.idAttachmentCover)
        .then(function (data) {
          setCardAttachmentUrl(JSON.parse(data)?.previews[4].url);
        })
        .catch((err) => console.log("err", err));
    }
  }, [setCardAttachmentUrl, card]);

  const handleOpenModal = () => {
    setOpenModal(true);
    history.push(`/boards/${boardId}/lists/card/${card?.id}`);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    history.push(`/boards/${boardId}/lists`);
  };

  const renderImage = () => {
    return cardAttachmentUrl ? (
      <img width="250px" src={cardAttachmentUrl} alt="Card Attachment" />
    ) : null;
  };

  return (
    <>
      <CardContainer onClick={handleOpenModal}>
        <CardContent>
          {renderImage()}
          <Typography gutterBottom>{card?.name}</Typography>
        </CardContent>
      </CardContainer>
      <CardModalComponent
        card={card}
        open={openModal}
        handleCloseModal={handleCloseModal}
        cardAttachmentUrl={cardAttachmentUrl}
        handleDeleteCard={handleDeleteCard}
      />
    </>
  );
};

export default CardComponent;
