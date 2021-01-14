import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #ffffff;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  display: flex;
  flex-direction: row;

  @media (min-width: 450px) {
    width: 40rem;
    height: 15rem;
  }
  @media (min-width: 1280px) {
    width: 30rem;
    height: 10rem;
  }
`;
export const ImgContainer = styled.div`
  width: 25%;
  height: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    width: 25%;
    height: 10rem;
  }
`;
export const DefaultImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  @media (min-width: 400px) {
    width: 10rem;
    height: 10rem;
  }
  @media (min-width: 1280px) {
    width: 8rem;
    height: 8rem;
  }
`;
export const InfoContainer = styled.div`
  width: 75%;
  height: 15rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    width: 75%;
    height: 10rem;
  }
`;
export const Title = styled.h2`
  text-align: left;
  padding-left: 1.5rem;
  width: 100%;
  height: 20%;
  margin: 0;
  padding-top: 5px;
  font-weight: normal;

  @media (min-width: 1280px) {
    width: 100%;
    height: 2rem;
    font-size: 20px;
  }
`;
export const Description = styled.p`
  text-align: left;
  padding-left: 1.5rem;
  width: 100%;
  height: 30%;
  margin: 0;

  @media (min-width: 1280px) {
    width: 100%;
    height: 2rem;
    font-size: 12px;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: row;
`;
export const ProductSelectContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Quantify = styled.h3`
  margin: 0;
  padding: 1rem;
  font-weight: normal;
`;
export const PriceText = styled.h3`
  text-align: center;
  margin: 0;
  font-weight: normal;
  margin-bottom: 0.5rem;

  @media (min-width: 1280px) {
    margin: 0;
  }
`;
export const PriceContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
