import React from "react";
import {
  ModalContainer,
  ContentContainer,
  DialogIconCloseContainer,
  WindowCover,
  WindowHeader,
  WindowMainCol,
  WindowSidebar,
  DescriptionSection,
  DescriptionTitleContainer,
  EditDescription,
  SectionTitleHeader,
  StyledAvatar,
  InputForm,
  InputMessage,
  StlButton,
  StlSendIcon,
  InputFormContainer,
  CommentContainer,
  CurrentComment,
  CommentText,
  CommentActions,
  CommentActionsContainer,
} from "./cardModal.styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";

const PureCardModal = ({
  open,
  handleCloseModal,
  cardAttachmentUrl,
  card,
  comments,
  handleDeleteCard,
  handleDeleteComment,
  handleAddComment,
  text,
  setText,
  onKeyDown,
  renderDescForm,
  renderDescTitle,
  openDescForm,
  setOpenDescForm,
  renderTitleForm,
  renderTitle,
  openTitleForm,
  setOpenTitleForm,
}) => {
  const renderImage = () => {
    return cardAttachmentUrl ? (
      <WindowCover url={cardAttachmentUrl}>
        <DialogIconCloseContainer color="white">
          <CloseIcon style={{ cursor: "pointer" }} onClick={handleCloseModal} />
        </DialogIconCloseContainer>
      </WindowCover>
    ) : (
      <DialogIconCloseContainer color="black">
        <CloseIcon style={{ cursor: "pointer" }} onClick={handleCloseModal} />
      </DialogIconCloseContainer>
    );
  };

  const CommentsWrapper = comments?.map((comment, i) => {
    return (
      <div key={i}>
        <WindowHeader>
          <CommentContainer>
            <CurrentComment>
              <CommentText>{comment?.data?.text}</CommentText>
            </CurrentComment>
          </CommentContainer>
        </WindowHeader>
        <CommentActionsContainer>
          <CommentActions>Edit</CommentActions>
          <CommentActions></CommentActions>
          <CommentActions onClick={() => handleDeleteComment(comment?.id)}>
            Delete
          </CommentActions>
        </CommentActionsContainer>
      </div>
    );
  });

  return (
    <ModalContainer
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ContentContainer>
          {renderImage()}
          {openTitleForm ? renderTitleForm() : renderTitle()}
          <WindowHeader>
            <SectionTitleHeader>Code Review</SectionTitleHeader>
          </WindowHeader>
          <WindowMainCol>
            <DescriptionSection>
              <DescriptionTitleContainer>
                <WindowHeader>
                  <SectionTitleHeader>Description</SectionTitleHeader>
                  <div onClick={() => setOpenDescForm(true)}>
                    <EditDescription>Edit</EditDescription>
                  </div>
                </WindowHeader>

                {openDescForm ? renderDescForm() : renderDescTitle()}
                <WindowHeader>
                  <SectionTitleHeader>Activity</SectionTitleHeader>
                </WindowHeader>
                <WindowHeader>
                  <SectionTitleHeader>
                    <StyledAvatar>VD</StyledAvatar>
                  </SectionTitleHeader>
                  <InputFormContainer>
                    <InputForm>
                      <InputMessage
                        type="text"
                        placeholder="Write a comment."
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={onKeyDown}
                        value={text}
                      ></InputMessage>
                      <StlButton onClick={handleAddComment}>
                        <StlSendIcon />
                      </StlButton>
                    </InputForm>
                  </InputFormContainer>
                </WindowHeader>
                <WindowHeader>
                  <SectionTitleHeader>Comments</SectionTitleHeader>
                </WindowHeader>
                {CommentsWrapper}
              </DescriptionTitleContainer>
            </DescriptionSection>
          </WindowMainCol>
          <WindowSidebar>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteCard(card?.id) & handleCloseModal()}
            >
              Delete
            </Button>
          </WindowSidebar>
        </ContentContainer>
      </Fade>
    </ModalContainer>
  );
};

export default PureCardModal;
