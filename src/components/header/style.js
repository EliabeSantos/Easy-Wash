import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  @media (min-width: 1280px) {
    height: 3rem;
  }

  .imageContainer {
    background-color: #fff;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 1rem;

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
  }
`;
