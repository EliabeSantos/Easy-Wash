import MainIMage from "./serviceImg.svg";
import Header from "../../components/header";

import { MainContainer, ServiceImageContainer, ServiceImage } from "./style";

const ServiceList = () => {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <ServiceImageContainer>
          <ServiceImage src={MainIMage}></ServiceImage>
        </ServiceImageContainer>
      </MainContainer>
    </>
  );
};

export default ServiceList;
