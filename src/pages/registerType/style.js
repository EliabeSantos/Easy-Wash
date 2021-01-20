import styled from "styled-components";

export const ContainerRegisterType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5rem);

  @media (max-height: 800px) {
    justify-content: flex-start;
  }
  .MuiTypography-body1 {
    font-size: 1.7rem;
  }
  .MuiFormControlLabel-root {
    width: 100%;
    margin-bottom: 8rem;
    border: 0;
    background-color: #3d90ab;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

    @media (max-height: 550px) {
      margin-bottom: 2rem;
    }
    @media (max-height: 650px) {
      margin-bottom: 4rem;
    }
  }
  .MuiFormControlLabel-root:hover {
    color: white;
  }
  .MuiRadio-colorSecondary.Mui-checked {
    color: black;
  }
  .MuiSvgIcon-root {
    font-size: 1.9rem;
    margin-right: 2rem;
  }
  h2 {
    padding: 2rem;
    font-size: 3rem;
    text-align: center;
    color: #3d90ab;
    @media (max-height: 550px) {
      padding: 1rem;
    }
  }
  fieldset {
    display: flex;

    padding: 3rem;
    align-items: center;
    justify-content: center;
  }
  button {
  }
  .MuiButton-outlinedPrimary {
    margin-bottom: 2rem;
  }
  .MuiButton-label {
    font-size: 1.5rem;
  }
`;
