import styled from "styled-components";
import Ondas from "./image/ondas.svg";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 15rem);
`;

export const Form = styled.form`
  height: 30%;

  text-align: center;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h2`
  font-size:2rem;
`
export const Containertitle = styled.div`
width:100%;
height:20rem;
background-image:url(${Ondas});
background-repeat: no-repeat;
border:2px solid black;
`
export const ContainerImage = styled.div`
display:flex;
justify-content:center;
`
export const Image = styled.img`
width:80%;
`
export const ButtonContainer = styled.div`
  margin: 3rem 0 1rem 0;
`
export const Container = styled.div`
  width:100%;
`

