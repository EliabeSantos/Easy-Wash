import {
  MainContainer,
  ImgContainer,
  DefaultImg,
  InfoContainer,
  Title,
  Description,
  ButtonContainer,
  PriceContainer,
  ProductSelectContainer,
  PriceText,
  Quantify,
} from "./style";
import DefaultButton from "../sharedButton";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { addToCartThunk } from "../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";

const ServiceCard = ({ title, description, price, service }) => {
  const [value, setValue] = useState(1);
  const [serciveCount, setServiceCount] = useState([]);
  const realPrice = parseInt(price) * value;
  const dispatch = useDispatch();
  return (
    <>
      <MainContainer>
        <ImgContainer>
          <DefaultImg
            src={
              "https://e7.pngegg.com/pngimages/44/475/png-clipart-laundry-liquid-clothing-clothing-clean-clothes-basket.png"
            }
          />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonContainer>
            <ProductSelectContainer>
              <BiMinus
                onClick={() => {
                  if (value > 1) {
                    setValue(value - 1);
                  }
                }}
                size="2rem"
              />
              <Quantify>{value}</Quantify>
              <BiPlus
                onClick={() => {
                  setValue(value + 1);
                }}
                size="2rem"
              />
            </ProductSelectContainer>
            <PriceContainer>
              <PriceText>R${value > 1 ? realPrice : price}</PriceText>
              <DefaultButton
                _func={() => {
                  for (let i = 0; i < value; i++) {
                    dispatch(addToCartThunk(service));
                    setValue(1);
                  }
                }}
                name={"Adicionar"}
                width="50%"
              />
            </PriceContainer>
          </ButtonContainer>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default ServiceCard;
