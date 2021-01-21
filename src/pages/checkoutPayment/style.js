import styled from "styled-components";

export const Container = styled.div`
  min-height: 350px;
  h1 {
    font-weight: normal;
    font-size: 1.7rem;
  }

  fieldset {
    /* background-color: lightgreen; */
    width: 100%;
    height: 40vh;

    .MuiFormGroup-root {
      /* background-color: lightcoral; */
      height: 20rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;

      @media (min-height: 450px) {
        height: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }

      .MuiFormControlLabel-root {
        margin: 0;
        width: 18rem;
        /* height: 4rem; */
        display: flex;
        justify-content: space-evenly;

        span.MuiTypography-root {
          width: 40%;
          img {
            width: 100%;
          }
        }
      }
    }

    label .MuiTypography-root > img {
      width: 100%;
    }
  }

  button {
    font-size: 1.4rem;
    width: 15rem;
    height: 3rem;

    @media (min-height: 450px) {
      height: 4rem;
    }
  }

  .finish {
    display: block;
    background-color: #adffad;
    color: #005200;
    font-size: 1.3rem;
    margin: 0.5rem auto;
    padding: 0.3rem 0 0;
    border-radius: 5px;
    width: 15rem;

    @media (min-height: 450px) {
      padding: 1rem 0 0;
    }

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

        .MuiFormControlLabel-root {
          width: 22rem;
          span.MuiTypography-root {
            width: 50%;
            img {
              width: 100%;
            }
          }
        }
      }
    }

    .finish {
      margin: 5rem auto 0;
    }
  }
`;
