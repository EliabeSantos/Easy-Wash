import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 728px; */
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
      color: #333;
    }
    .productsList {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;

      .emptyCart {
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > span {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 2rem;
        }

        button {
          width: 10rem;
          > span {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .footer {
    background-color: var(--color-primary);
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: fixed;
    bottom: 0;
    width: calc(100% - 10px);

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

  @media (min-width: 1280px) {
    .gridContainer {
      display: grid;
      grid-template-columns: auto 30%;
      grid-template-rows: auto auto;
      grid-template-areas:
        "products address"
        "products total";
      height: calc(100vh - 2.5rem - 10px);

      .address {
        grid-area: address;
        align-items: flex-start;

        .imgContainer {
          display: none;
        }

        .addressInfo {
          h3,
          p {
            color: #333;
            font-weight: 400;
          }

          h3 {
            font-size: 2.5rem;
            margin: 2rem 0;
          }
          p {
            font-size: 2rem;
          }
        }
      }

      .productsContainer {
        grid-area: products;
        overflow: auto;
        border-right: 2px solid #aaa;
        .productTitle {
          text-align: left;
          border: none;
          font-size: 2.5rem;
          margin-left: 5rem;
        }

        .productsList {
          align-items: flex-start;

          div {
            width: 50%;
          }

          .emptyCart {
            width: calc(100vw - 50%);
            height: 50vh;

            > span {
              font-size: 2rem;
            }
          }
        }
      }

      .footer {
        position: initial;
        grid-area: total;
        flex-direction: column;
        align-self: flex-end;
        height: 80%;
        background-color: initial;

        span.total {
          color: #333;
          font-size: 2.5rem;
          display: flex;
          width: 100%;
          justify-content: space-around;
        }

        button {
          width: 25rem;
          height: 5rem;
          margin-bottom: 10rem;

          span {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;
