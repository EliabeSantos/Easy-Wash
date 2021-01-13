import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ServiceImageContainer = styled.div`
  width: 100%;
  height: 8rem;
`;
export const ServiceImage = styled.img`
  width: 100%;
  height: 8rem;
  margin: 5px 0;
  filter: blur(5px);
`;
export const ServiceInfo = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);

  display: flex;
  flex-wrap: wrap;

  @media (min-width: 450px) {
  }
`;
export const Title = styled.h1`
  width: 69%;
  height: 4rem;
  margin-bottom: 0;
  font-weight: normal;
  text-align: left;
  padding-left: 0.5rem;

  @media (min-width: 450px) {
    width: 100%;
  }
`;
export const Rate = styled.h2`
  width: 29%;
  height: 4rem;
  font-weight: normal;
  margin-bottom: 0;

  @media (min-width: 450px) {
    width: 100%;
  }
`;
export const Description = styled.h1`
  width: 100%;
  height: 4rem;
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 450px) {
    width: 100%;
  }
`;
export const CartContainer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #3d90ab;
  display: flex;

  position: absolute;
  bottom: 0;
`;
export const CartItems = styled.div`
  width: 33.33%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
