import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export const TrelloListContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3;
  width: 300px;
  padding: 8px;
  margin: 8px;
  display: inline-table;
  height: 100%;
`;
export const TrelloListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DeleteIconContainer = styled(DeleteIcon)`
  cursor: pointer;
  height: 100%;
  margin: auto;
  &:hover {
    color: red;
  }
`;
