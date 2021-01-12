import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const SharedButton = styled(Button)`
  width: ${(props) => (props.width ? props.width : "14rem")};
  height: ${(props) => (props.height ? props.height : "2rem")};

  background-color:#47D4FF !important;
  border-radius: 3px !important;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3) !important;
  color:#000000 !important;
  border: 0 !important;
  font-weight:normal !important;
`;