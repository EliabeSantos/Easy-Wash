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
          <DefaultImg />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </InfoContainer>
      </MainContainer>
    </>
  );
};

export default CartCard;
