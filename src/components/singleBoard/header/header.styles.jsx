import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const HeaderContainer = styled.div`
  height: auto;
  padding: 8px 4px 4px 8px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const BoardNameLabelContainer = styled.div`
  margin-right: 10px;
`;
export const BoardNameLabel = styled.h3`
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: 500;
`;
export const BoardNameContainer = styled(TextField)`
  .MuiInputBase-input {
    color: white;
    font-weight: bold;
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.42);
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid rgba(255, 255, 255, 0.38);
  }
`;
