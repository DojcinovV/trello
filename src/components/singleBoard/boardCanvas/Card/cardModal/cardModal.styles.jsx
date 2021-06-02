import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
`;
export const ContentContainer = styled.div`
  background-color: #f1f2f5;
  max-height: 100%;
  overflow: auto;
`;
export const DialogIconCloseContainer = styled.div`
  border-radius: 50%;
  padding: 4px;
  margin: 4px;
  z-index: 2;
  color: #fff;
  text-align: right;
  color: ${(props) => props.color};
`;
export const WindowCover = styled.div`
  background-image: ${(props) => `url(${props.url})`};
  height: 160px;
  min-height: 160px;
  background-size: cover;
  background-origin: content-box;
  padding: 0px;
  box-sizing: border-box;
  background-position: 50%;
  text-align: right;
  padding-top: 5px;
`;
export const WindowHeader = styled.div`
  margin: 12px 40px 8px 56px;
  min-height: 32px;
  position: relative;
  z-index: 1;
  text-align: left;
  display: flex;
  align-items: center;
`;
export const WindowMainCol = styled.div`
  float: left;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 24px;
  padding: 0 8px 8px 0;
  position: relative;
  width: 552px;
  z-index: 0;
`;
export const WindowSidebar = styled.div`
  float: right;
  padding: 0 16px 8px 8px;
  width: 168px;
  overflow: hidden;
  z-index: 10;
`;
export const DescriptionSection = styled.div`
  clear: both;
  margin-bottom: 24px;
  position: relative;
`;
export const DescriptionTitleContainer = styled.div`
  display: flex;
  min-height: 32px;
  flex-direction: column;
`;
export const EditDescription = styled.a`
  color: #172b4d;
  margin-left: 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px 12px;
  text-decoration: none;
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    box-shadow: none;
    border: none;
  }
`;
export const SectionTitleHeader = styled.h3`
  margin: 0;
`;
export const StyledAvatar = styled.div`
  border-radius: 50%;
  height: 32px;
  width: 32px;
  color: white;
  background: linear-gradient(#b22865, #cd5a91);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
export const InputFormContainer = styled.div`
  width: 100%;
  margin: 0 10px;
`;
export const InputForm = styled.form`
  display: flex;
  height: 40px;
`;

export const InputMessage = styled.input`
  border: none;
  border-radius: 0;
  padding: 3%;
  width: 85%;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;
export const StlButton = styled(IconButton)`
  background-color: rgba(9, 30, 66, 0.04);
  padding: 3px;
  display: inline-block;
  border: none;
  width: 15%;
  border-radius: 0;
  color: white;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export const StlSendIcon = styled(Send)`
  font-size: 1rem;
`;
export const CommentContainer = styled.div`
  display: block;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px -1px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  box-sizing: border-box;
  clear: both;
  display: inline-block;
  margin: 4px 2px 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;
export const CurrentComment = styled.div`
  padding: 8px 12px;
`;
export const CommentText = styled.p`
  margin: 0;
`;
export const CommentActionsContainer = styled.div`
  margin: 0 40px 8px 56px;
`;
export const CommentActions = styled.a`
  color: #5e6c84;
  font-size: 12px;
  margin: 0 2px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
