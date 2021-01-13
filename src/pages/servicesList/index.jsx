import MainIMage from "./serviceImg.svg";
import Header from "../../components/header";
import ServiceCard from "../../components/serviceCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import {
  MainContainer,
  ServiceImageContainer,
  ServiceImage,
  ServiceInfo,
  Title,
  Rate,
  Description,
  CartContainer,
} from "./style";

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
        {services.map(({ title, price, description }) => (
          <ServiceCard title={title} price={price} description={description} />
        ))}
        <CartContainer></CartContainer>
      </MainContainer>
    </>
  );
};

export default ServiceList;
