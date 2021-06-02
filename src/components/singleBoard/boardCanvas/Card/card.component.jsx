import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardContainer } from "./card.styles";
import { WindowHeader } from "./cardModal/cardModal.styles";
import CardModalComponent from "./cardModal";
import { boardsApi } from "../../../../api/boards.api";
import { BOARDS } from "../../../../constants";
import Textarea from "react-textarea-autosize";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardComponent = ({ card, boardId, handleDeleteCard }) => {
  const [cardAttachmentUrl, setCardAttachmentUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openTitleForm, setOpenTitleForm] = useState(false);
  const [titleText, setTitleText] = useState(card?.name ?? "");

  const history = useHistory();
  const dispatch = useDispatch();

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

  const handleOnTitleBlur = () => {
    if (titleText !== card?.desc) {
      dispatch({
        type: BOARDS.UPDATE_CARD,
        payload: { text: titleText, cardId: card?.id, cardField: "name" },
      });
    } else if (titleText === "") {
      setOpenTitleForm(card?.name);
    }
    setOpenTitleForm(false);
  };

  const onEditTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  };

  const renderTitleForm = () => {
    return (
      <WindowHeader>
        <Textarea
          autoFocus
          onKeyDown={onEditTitleKeyDown}
          onBlur={handleOnTitleBlur}
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
          style={{ resize: "none", width: "100%" }}
        />
      </WindowHeader>
    );
  };

  const renderTitle = () => {
    return (
      <WindowHeader>
        <h2 onClick={() => setOpenTitleForm(true)}>{titleText}</h2>
      </WindowHeader>
    );
  };

  return (
    <>
      <CardContainer onClick={handleOpenModal}>
        <CardContent>
          {renderImage()}
          <Typography gutterBottom>{titleText}</Typography>
        </CardContent>
      </CardContainer>
      <CardModalComponent
        card={card}
        open={openModal}
        handleCloseModal={handleCloseModal}
        cardAttachmentUrl={cardAttachmentUrl}
        handleDeleteCard={handleDeleteCard}
        renderTitleForm={renderTitleForm}
        renderTitle={renderTitle}
        openTitleForm={openTitleForm}
        setOpenTitleForm={setOpenTitleForm}
      />
    </>
  );
};

export default CardComponent;
