import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const SharedInputElement = styled(TextField)`
  width: ${({ width }) => (width ? width : "25.5rem")};
  height: ${({ height }) => (height ? height : "4.6rem")};
  margin-right: 0.7rem !important;
`;
