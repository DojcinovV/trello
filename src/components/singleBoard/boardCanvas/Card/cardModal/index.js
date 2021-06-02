import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COMMENTS, BOARDS } from "../../../../../constants";
import PureCardModal from "./PureCardModal";
import Textarea from "react-textarea-autosize";
import { WindowHeader } from "./cardModal.styles";

import Button from "@material-ui/core/Button";

const CardModalComponent = ({
  open,
  handleCloseModal,
  cardAttachmentUrl,
  card,
  handleDeleteCard,
  renderTitleForm,
  renderTitle,
  openTitleForm,
  setOpenTitleForm,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [openDescForm, setOpenDescForm] = useState(false);
  const [descText, setDescText] = useState(card?.desc ?? "");

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

  const handleEditDesc = () => {
    if (descText !== card?.desc) {
      dispatch({
        type: BOARDS.UPDATE_CARD,
        payload: { text: descText, cardId: card?.id, cardField: "desc" },
      });
    } else if (descText === "") {
      setOpenDescForm(card?.desc);
    }
    setOpenDescForm(false);
  };

  const onDescKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleEditDesc();
    }
  };

  const renderDescForm = () => {
    return (
      <>
        <WindowHeader>
          <Textarea
            autoFocus
            onKeyDown={onDescKeyDown}
            value={descText}
            onChange={(e) => setDescText(e.target.value)}
            style={{ resize: "none", width: "100%" }}
          />
        </WindowHeader>
        <WindowHeader>
          <Button variant="contained" color="primary" onClick={handleEditDesc}>
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenDescForm(false)}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </Button>
        </WindowHeader>
      </>
    );
  };

  const renderDescTitle = () => {
    return <WindowHeader>{descText}</WindowHeader>;
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
      renderDescForm={renderDescForm}
      renderDescTitle={renderDescTitle}
      openDescForm={openDescForm}
      setOpenDescForm={setOpenDescForm}
      renderTitleForm={renderTitleForm}
      renderTitle={renderTitle}
      openTitleForm={openTitleForm}
      setOpenTitleForm={setOpenTitleForm}
    />
  );
};

export default CardModalComponent;
