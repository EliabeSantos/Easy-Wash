import { RiCloseCircleLine } from "react-icons/ri";
import {
  MainContainer,
  ImgContainer,
  InfoContainer,
  Title,
  Value,
  DefaultImg,
} from "./style";

const CartCard = ({ title, value, id }) => {
  const removeFromCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const newCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };
  return (
    <>
      <MainContainer>
        <div className="remove">
          <RiCloseCircleLine size="2rem" onClick={removeFromCart} />
        </div>
        <ImgContainer>
          <DefaultImg src={"https://picsum.photos/200/300"} />
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
