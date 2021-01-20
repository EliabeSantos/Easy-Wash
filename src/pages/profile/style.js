import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const MainContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  text-align: center;
  margin-bottom: 5%;
  @media (min-width: 1024px) {
  }
`;

export const InformationContainer = styled.div`
  position: relative;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-top: 15%;
  /* background-color: brown; */
  h4,
  p {
    text-align: left;
    padding-left: 5%;
  }
  hr {
    margin-bottom: 4rem;
  }
  @media (min-width: 980px) {
    margin-top: 0;
    width: 90%;
    height: 95%;
  }
`;

export const Select = styled(TextField)`
  width: ${({ width }) => (width ? width : "25.5rem")};
  height: ${({ height }) => (height ? height : "4.6rem")};
  margin-right: 0.7rem !important;
`;
