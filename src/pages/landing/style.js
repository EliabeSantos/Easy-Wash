import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 88vh;
  max-width: 720px;
  @media (min-height: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
export const AllContentContainer = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  width: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;

  @media (max-height: 376px) {
    height: 20%;
  }
  @media (min-height: 600px) {
    padding-top: 5rem;
  }
`;
export const Title = styled.h1`
  font-weight: normal;
  font-size: 50px;
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 400px) {
    margin: 1rem;
  }

  @media (min-width: 1280px) {
    margin: 2rem;
  }
  @media (max-height: 376px) {
    font-size: 40px;
  }

  @media (min-height: 600px) {
    font-size: 50px;
  }
`;
export const MainImageContainer = styled.div`
  width: 100%;
  height: 40%;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    height: 50%;
  }
  @media (min-width: 720px) {
    height: 40%;
  }
`;
export const Img = styled.img`
  width: 70%;
  max-width: 300px;
  z-index: 1;

  /* @media (min-width: 600px) {
    width: 10rem;
  } */

  /* @media (max-height: 376px) {
    width: 9rem;
  } */

  @media (min-width: 1024px) {
    width: 19rem;
  }

  @media (min-width: 1280px) {
    width: 15rem;
  }

  @media (max-height: 449px) {
    width: 15%;
  }
  @media (min-height: 450px) {
    width: 10rem;
  }
  @media (min-height: 550px) {
    width: 12rem;
  }
  @media (min-height: 600px) {
    width: 50%;
  }
`;
export const WaveImg = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  max-height: 80%;

  @media (min-width: 600px) {
    display: none;
  }
`;
export const WaveImg2 = styled.img`
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  max-height: 80%;
  /* display: none; */
  @media (max-width: 600px) {
    display: block;
  }
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  height: 15%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-height: 600px) {
    padding-bottom: 5rem;
  }

  button {
    z-index: 1;
    margin: 0.5rem;
    width: 20rem;
    height: 2rem;
    font-size: 14px;

    @media (min-width: 400px) {
      height: 2.5rem;
      margin: 1rem;
    }
    @media (min-height: 600px) {
      height: 3rem;
    }
  }
`;
