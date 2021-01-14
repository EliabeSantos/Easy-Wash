import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  .imageContainer {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;

    img {
      width: 100%;
    }
  }

  .menuContainer {
    height: 100%;

    button {
      height: 100%;

      .MuiSvgIcon-root {
        font-size: 2rem;
        color: #fff;
      }
    }

    .MuiDrawer-root .MuiDrawer-paper {
      background-color: var(--color-primary);
      color: #fff;
      width: 50%;

      .drawerHeader {
        text-align: end;
        button span {
          color: #fff;
          font-size: 2rem;
        }
      }

      ul {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 3rem;

    .imageContainer {
      height: 2.5rem;
      width: 2.5rem;
    }

    .menuContainer .MuiDrawer-root .MuiDrawer-paper {
      width: 30%;
      ul {
        font-size: 1rem;
      }
    }
  }
`;
