import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #fff;
  margin: 0;
  display: flex;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  @media (min-width: 600px) {
    width: 22rem;
  }
`;
export const ImgContainer = styled.div`
  width: 33.333%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  @media (max-width: 320px) {
    width: 50%;
  }
`;
export const InfoContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 320px) {
    width: 50%;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  @media (max-width: 320px) {
    text-align: center;
    font-size: 16px;
  }
`;
export const Value = styled.h3`
  font-size: 16px;
`;
export const DefaultImg = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: black;
  border-radius: 100%;
`;
