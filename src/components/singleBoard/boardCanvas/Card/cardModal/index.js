import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COMMENTS } from "../../../../../constants";
import PureCardModal from "./PureCardModal";

const CardModalComponent = ({
  open,
  handleCloseModal,
  cardAttachmentUrl,
  card,
  handleDeleteCard,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    if (open) {
      dispatch({ type: COMMENTS.GET_COMMENTS, payload: card?.id });
    }
  }, [dispatch, card, open]);

  const { comments } = useSelector((s) => s.comments);

  const handleDeleteComment = (actionId) => {
    dispatch({
      type: COMMENTS.DELETE_COMMENT,
      payload: { actionId: actionId, cardId: card?.id },
    });
  };

  const handleAddComment = () => {
    if (text !== "") {
      dispatch({
        type: COMMENTS.ADD_COMMENT,
        payload: { cardId: card?.id, text: text },
      });
      setText("");
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && text !== "") {
      e.preventDefault();
      dispatch({
        type: COMMENTS.ADD_COMMENT,
        payload: { cardId: card?.id, text: text },
      });
      setText("");
    }
  };

  return (
    <PureCardModal
      open={open}
      handleCloseModal={handleCloseModal}
      cardAttachmentUrl={cardAttachmentUrl}
      card={card}
      comments={comments}
      handleDeleteCard={handleDeleteCard}
      handleDeleteComment={handleDeleteComment}
      handleAddComment={handleAddComment}
      setText={setText}
      text={text}
      onKeyDown={onKeyDown}
    />
  );
};

export default CardModalComponent;
