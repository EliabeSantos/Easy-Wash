import MainIMage from "./serviceImg.svg";
import Header from "../../components/header";
import ServiceCard from "../../components/serviceCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import DefaultButton from "../../components/sharedButton";

import {
  MainContainer,
  ServiceImageContainer,
  ServiceImage,
  ServiceInfo,
  Title,
  Rate,
  Description,
  CartContainer,
  CartItems,
  AllContentContainer,
} from "./style";

import { FaShoppingCart } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const ServiceList = () => {
  let { id } = useParams();
  const [services, setServices] = useState([]);
  const [user, setUser] = useState([]);
  const axios = require("axios");

  const getServices = async () => {
    try {
      const res = await axios.get(
        "https://easy-wash-server.herokuapp.com/users"
      );
      const data = await res.data;
      const dataUser = data.filter((teste) => {
        return teste.id === 3;
      });
      setServices(dataUser[0].services);
      setUser(dataUser[0]);
    } catch (error) {}
  };
  useEffect(() => {
    getServices();
  }, [user]);
  return (
    <>
      <Header></Header>
      <AllContentContainer>
        <MainContainer>
          <ServiceImageContainer>
            <ServiceImage src={MainIMage}></ServiceImage>
          </ServiceImageContainer>
          <ServiceInfo>
            <Title>{user.company}</Title>
            <Rate>
              4,5 <BsStarFill color="yellow" size="20px" />
            </Rate>
            <Description>Pedido minimo de 10 itens</Description>
          </ServiceInfo>
          {services.map((services) => (
            <ServiceCard
              title={services.title}
              price={services.price}
              description={services.description}
              service={services}
            />
          ))}
          <CartContainer>
            <CartItems>
              <FaShoppingCart size={"20px"}></FaShoppingCart>
            </CartItems>
            <CartItems>
              <DefaultButton name="Ver Carrinho" />
            </CartItems>
            <CartItems></CartItems>
          </CartContainer>
        </MainContainer>
      </AllContentContainer>
    </>
  );
};

export default ServiceList;
