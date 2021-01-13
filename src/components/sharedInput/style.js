import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SharedInputElement = styled(TextField)`
  width: ${({ width }) => (width ? width : "25.5rem")};
  height: ${({ height }) => (height ? height : "4.6rem")};
  margin-right: 0.7rem !important;
  label {
    color: #43c1d8 !important;
  }
  label.focused {
    color: #43c1d8; 
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #43c1d8; 
    }
  }  
`;
