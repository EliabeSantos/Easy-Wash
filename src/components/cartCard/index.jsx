import {
  MainContainer,
  ImgContainer,
  InfoContainer,
  Title,
  Value,
  DefaultImg,
} from "./style";

const CartCard = ({ title, value }) => {
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
          <Value>R$ {value}</Value>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default CartCard;
