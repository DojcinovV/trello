import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const ListContainer = styled.div`
  margin: ${(props) => (props.list ? "8px" : "0")};
`;
export const CardContainer = styled(Card)`
  overflow: visible;
  min-height: 80px;
  min-width: 272px;
  max-height: 100px;
`;

export const ActionButtonContainer = styled.div`
  opacity: ${(props) => (props.list ? "1" : "0.5")};
  color: ${(props) => (props.list ? "white" : "inherit")};
  background-color: ${(props) => (props.list ? "rgba(0,0,0,.15)" : "inherit")};
  margin: ${(props) => (props.list ? "8px" : "0")};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  min-width: 272px;
  padding-left: ${(props) => (props.list ? "10px" : "0")};
`;

export const ButtonContainer = styled(Button)`
  color: white;
  background-color: #5aac44;
`;
export const FormButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
