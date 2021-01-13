import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
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

  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  width: 69%;
  height: 4rem;
  font-weight: normal;
  text-align: left;
  padding-left: 0.5rem;
`;
export const Rate = styled.h2`
  width: 29%;
  height: 4rem;
  font-weight: normal;
`;
export const Description = styled.h1`
  width: 100%;
  height: 4rem;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;
