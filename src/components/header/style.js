import styled from "styled-components"

export const Container = styled.div`
  background-color: #3d90ab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

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
`
