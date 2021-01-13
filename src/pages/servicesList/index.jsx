import MainIMage from "./serviceImg.svg";
import Header from "../../components/header";

import {
  MainContainer,
  ServiceImageContainer,
  ServiceImage,
  ServiceInfo,
  Title,
  Rate,
  Description,
} from "./style";

import { BsStarFill } from "react-icons/bs";

const ServiceList = () => {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <ServiceImageContainer>
          <ServiceImage src={MainIMage}></ServiceImage>
        </ServiceImageContainer>
        <ServiceInfo>
          <Title>Lavanderia 2 irmaos</Title>
          <Rate>
            4,5 <BsStarFill color="yellow" size="20px" />
          </Rate>
          <Description>Pedido minimo de 10 itens</Description>
        </ServiceInfo>
      </MainContainer>
    </>
  );
};

export default ServiceList;
