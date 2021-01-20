import styled from "styled-components";
import Ondas from "./image/ondas.svg";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 5rem);
  @media (max-height: 700px) {
    min-height: 600px;
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  height: 30%;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-height: 700px) {
    height: 30%;

    p {
      padding: 0;
      margin: 0;
    }
  }
  @media (max-height: 500px) {
    height: 50%;

    p {
      padding: 0;
      margin: 0;
    }

    input {
      padding: 9px;
    }
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Containertitle = styled.div`
  width: 100%;
  height: 20rem;
  background-image: url(${Ondas});
  background-repeat: no-repeat;
  border: 2px solid black;
  @media (max-height: 700px) {
    height: 20%;
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  @media (max-height: 700px) {
    height: 200px;
  }
`;
export const Image = styled.img`
  width: 80%;
  @media (max-height: 700px) {
    width: 100%;
  }
`;
export const ButtonContainer = styled.div`
  margin: 3rem 0 1rem 0;
  @media (max-height: 500px) {
    margin: 0.5rem;

    button {
      height: 30px;
    }
  }
  @media (max-height: 700px) {
    margin: 0.5rem;

    button {
      height: 40px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
`;
