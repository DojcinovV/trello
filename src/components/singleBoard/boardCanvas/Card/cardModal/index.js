import React, { useEffect } from "react";
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
  useEffect(() => {
    if (open) {
      dispatch({ type: COMMENTS.GET_COMMENTS, payload: card?.id });
    }
  }, [dispatch, card, open]);

  const { comments } = useSelector((s) => s.comments);

  return (
    <PureCardModal
      open={open}
      handleCloseModal={handleCloseModal}
      cardAttachmentUrl={cardAttachmentUrl}
      card={card}
      comments={comments}
      handleDeleteCard={handleDeleteCard}
    />
  );
};

export default CardModalComponent;
