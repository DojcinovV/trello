import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const ListItem = styled(Grid)`
  padding: 1vw 0;
`;
export const ListEditSpan = styled.span`
  padding: 0 1vw;
`;
export const ListHoverableItem = styled(Grid)`
  padding: 1vw 0;
  display: flex;
  flex-direciton: row;
  &:hover ${ListEditSpan} {
    text-decoration: underline;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(33, 33, 33, 0.2);
  }
`;
export const ListSpan = styled.span`
  padding: 0 1vw;
`;
export const LangFormDiv = styled.div`
  padding: 0.5vw 0;
`;

export const LangFormButton = styled(Button)`
  margin: 1vw 0;
`;
