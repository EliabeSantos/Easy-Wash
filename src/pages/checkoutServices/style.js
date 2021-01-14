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
    }
  }
`;
