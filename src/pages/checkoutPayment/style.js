import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-weight: normal;
    font-size: 1.7rem;
  }

  fieldset {
    /* background-color: lightgreen; */
    width: 100%;
    height: 50vh;

    .MuiFormGroup-root {
      /* background-color: lightcoral; */
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    label .MuiTypography-root > img {
      width: 100%;
    }
  }

  button {
    font-size: 1.4rem;
    width: 15rem;
  }

  .finish {
    display: block;
    background-color: #adffad;
    color: #005200;
    font-size: 1.3rem;
    margin: 3rem auto 0;
    padding: 1rem 0 0;
    border-radius: 5px;
    width: 15rem;

    .line {
      margin-top: 1rem;
      height: 0.5rem;
      width: 100%;
      background-color: #005200;
      border-radius: 0 5px 5px 5px;
      animation-name: line;
      animation-duration: 3s;
    }
  }

  /* animation */
  @keyframes line {
    from {
      width: 100%;
    }
    to {
      width: 10%;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      font-size: 3rem;
    }

    fieldset {
      /* background-color: lightcoral; */
      height: 40vh;
      .MuiFormGroup-root {
        /* background-color: lightblue; */
        flex-direction: row;
      }
    }

    .finish {
      margin: 5rem auto 0;
    }
  }
`;
