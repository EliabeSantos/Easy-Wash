import styled from "styled-components";

export const Container = styled.div`
  .address {
    /* width: 100vw; */
    /* background-color: lightblue; */
    padding: 1rem;
    display: flex;
    align-items: center;

    .imgContainer {
      /* background-color: lightcoral; */
      height: 5rem;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
      }
    }

    .addressInfo {
      /* background-color: lightcyan; */
      margin-left: 1rem;
      h3,
      p {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
        color: var(--color-primary);
      }
    }
  }

  .productsContainer {
    .productTitle {
      /* background-color: lightblue; */
      padding: 2rem;
      text-align: center;
      font-size: 1.5rem;
      border-bottom: 1px solid #aaa;
    }
    .productsList {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      /* background-color: lightblue; */
    }
  }

  .footer {
    background-color: var(--color-primary);
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    span.total {
      color: #fff;
      font-size: 1.2rem;
    }

    button {
      span {
        font-size: 1rem;
      }
    }
  }
`;
